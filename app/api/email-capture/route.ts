import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type Body = {
  email?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STARTER_QUERY = "access_token=env-starter-free-2024";

function starterPackUrl(): string {
  const base = SITE_URL.replace(/\/$/, "");
  return `${base}/prompts/starter?${STARTER_QUERY}`;
}

function emailHtml(promptUrl: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${SITE_NAME}</title>
</head>
<body style="margin:0;padding:0;background-color:#F2F2F2;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#F2F2F2;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:520px;background-color:#ffffff;border-radius:16px;border:1px solid #e5e5e5;overflow:hidden;">
          <tr>
            <td style="padding:28px 28px 8px 28px;">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#f54927;">${SITE_NAME}</p>
              <h1 style="margin:0;font-size:22px;font-weight:600;letter-spacing:-0.02em;color:#171717;line-height:1.25;">Your Claude Starter Pack is here</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 28px 28px;">
              <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#525252;">Thanks for grabbing the free pack. You can open your prompts anytime with the link below — bookmark it or save this email.</p>
              <p style="margin:0 0 24px 0;font-size:16px;line-height:1.6;color:#525252;">We built Envowl to connect you with vetted AI expertise when you are ready for the next step.</p>
              <a href="${promptUrl}" style="display:inline-block;padding:14px 24px;background-color:#171717;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;border-radius:9999px;">Open your starter prompts</a>
              <p style="margin:24px 0 0 0;font-size:13px;line-height:1.5;color:#737373;word-break:break-all;">If the button does not work, copy and paste this URL into your browser:<br /><span style="color:#404040;">${promptUrl}</span></p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 24px 28px;border-top:1px solid #f5f5f5;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:#a3a3a3;">${SITE_NAME} — The AI Talent Marketplace</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = String(body.email ?? "").trim();
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { success: false, message: "Email delivery is not configured." },
      { status: 503 }
    );
  }

  const promptUrl = starterPackUrl();
  let waitlistError: string | null = null;
  try {
    console.log("[email-capture] waitlist insert attempt", {
      email: email.toLowerCase(),
      usingServiceRoleClient: true,
      hasServiceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()),
      supabaseUrlHost: process.env.NEXT_PUBLIC_SUPABASE_URL
        ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).host
        : null,
    });

    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin
      .from("waitlist")
      .upsert(
        {
          email: email.toLowerCase(),
        },
        {
          onConflict: "email",
          ignoreDuplicates: true,
        }
      )
      .select("id, email, created_at");

    console.log("[email-capture] waitlist insert response", { data, error });

    if (error) {
      waitlistError = error.message;
    }
  } catch (error) {
    console.log("[email-capture] waitlist insert exception", {
      error: error instanceof Error ? error.message : error,
    });
    waitlistError = error instanceof Error ? error.message : "Unknown waitlist error.";
  }

  if (waitlistError) {
    return NextResponse.json(
      { success: false, message: "Could not save email right now. Please try again." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const idempotencyKey = `starter-pack/${createHash("sha256").update(email.toLowerCase()).digest("hex").slice(0, 48)}`;

  const { error } = await resend.emails.send(
    {
      from: `${SITE_NAME} <hello@envowl.com>`,
      to: [email],
      subject: "Your Claude Starter Pack is here",
      html: emailHtml(promptUrl),
    },
    { idempotencyKey }
  );

  if (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Could not send email. Try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, message: "Check your inbox." }, { status: 200 });
}
