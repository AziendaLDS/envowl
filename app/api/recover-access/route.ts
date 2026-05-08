import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { PAID_PACK_CONFIG, isPaidPackSlug, type PaidPackSlug } from "@/lib/paid-pack-access";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type Body = {
  email?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function accessUrl(slug: PaidPackSlug, token: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  return `${base}${PAID_PACK_CONFIG[slug].path}?access_token=${encodeURIComponent(token)}`;
}

function recoveryEmailHtml(
  email: string,
  entries: Array<{ title: string; url: string }>
): string {
  const items = entries
    .map(
      (entry) =>
        `<li style="margin:0 0 12px 0;"><strong>${entry.title}</strong><br /><a href="${entry.url}" style="color:#171717;">${entry.url}</a></li>`
    )
    .join("");

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
              <h1 style="margin:0;font-size:22px;font-weight:600;letter-spacing:-0.02em;color:#171717;line-height:1.25;">Your Envowl access links</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 28px 28px;">
              <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#525252;">Hi ${email}, here are your purchased pack access links:</p>
              <ul style="padding-left:18px;margin:0 0 18px 0;font-size:15px;line-height:1.6;color:#525252;">
                ${items}
              </ul>
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

  const email = String(body.email ?? "").trim().toLowerCase();
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const supabaseAdmin = getSupabaseAdmin();
  const { data: purchases, error: queryError } = await supabaseAdmin
    .from("purchases")
    .select("pack_name, access_token, created_at")
    .eq("email", email)
    .order("created_at", { ascending: false });

  if (queryError) {
    return NextResponse.json(
      { success: false, message: "Could not recover access right now." },
      { status: 500 }
    );
  }

  const uniqueByPack = new Map<PaidPackSlug, { title: string; url: string }>();
  for (const row of purchases ?? []) {
    const slug = String(row.pack_name ?? "").trim();
    const token = String(row.access_token ?? "").trim();
    if (!isPaidPackSlug(slug) || !token || uniqueByPack.has(slug)) continue;
    uniqueByPack.set(slug, {
      title: PAID_PACK_CONFIG[slug].title,
      url: accessUrl(slug, token),
    });
  }

  const entries = Array.from(uniqueByPack.values());
  if (entries.length === 0) {
    return NextResponse.json(
      {
        success: false,
        message:
          "No purchase found for that email. If you think this is an error please contact us.",
      },
      { status: 404 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  if (!resendApiKey) {
    return NextResponse.json(
      { success: false, message: "Email delivery is not configured." },
      { status: 503 }
    );
  }

  const resend = new Resend(resendApiKey);
  const { error: emailError } = await resend.emails.send({
    from: `${SITE_NAME} <hello@envowl.com>`,
    to: [email],
    subject: "Your Envowl access links",
    html: recoveryEmailHtml(email, entries),
  });

  if (emailError) {
    return NextResponse.json(
      { success: false, message: "Could not send recovery email. Try again." },
      { status: 502 }
    );
  }

  return NextResponse.json(
    { success: true, message: "Check your inbox — we sent your access links" },
    { status: 200 }
  );
}
