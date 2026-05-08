import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";
import {
  absolutePaidPackAccessUrl,
  isPaidPackSlug,
  PAID_PACK_CONFIG,
  type PaidPackSlug,
} from "@/lib/paid-pack-access";
import { SITE_NAME } from "@/lib/seo";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function packPurchaseEmailHtml(promptUrl: string, packTitle: string): string {
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
              <h1 style="margin:0;font-size:22px;font-weight:600;letter-spacing:-0.02em;color:#171717;line-height:1.25;">Your Envowl pack is ready</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 28px 28px;">
              <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#525252;">Thank you for your purchase. Your prompts are ready — open them anytime with the link below.</p>
              <p style="margin:0 0 24px 0;font-size:16px;line-height:1.6;color:#525252;">${packTitle}</p>
              <a href="${promptUrl}" style="display:inline-block;padding:14px 24px;background-color:#171717;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;border-radius:9999px;">Open your prompts</a>
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

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) throw new Error("missing_stripe_secret");
  return new Stripe(key, { apiVersion: "2026-04-22.dahlia" });
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook not configured." },
      { status: 503 }
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid payload.";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const email =
    session.customer_details?.email?.trim() ??
    session.customer_email?.trim() ??
    null;

  const packNameRaw = session.metadata?.packName?.trim() ?? "";
  const packName = isPaidPackSlug(packNameRaw) ? packNameRaw : null;

  if (!email || !packName) {
    console.log("[stripe-webhook] checkout.session.completed skipped", {
      sessionId: session.id,
      hasEmail: Boolean(email),
      packName: packNameRaw || null,
    });
    return NextResponse.json({ received: true });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.log("[stripe-webhook] RESEND_API_KEY missing; cannot send email", {
      sessionId: session.id,
      to: email,
      packName,
    });
    return NextResponse.json({ received: true });
  }

  const slug = packName as PaidPackSlug;
  const promptUrl = absolutePaidPackAccessUrl(slug);
  const packTitle = PAID_PACK_CONFIG[slug].title;
  const accessToken = PAID_PACK_CONFIG[slug].accessToken;

  let supabaseErrorMessage: string | null = null;
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { error: insertError } = await supabaseAdmin.from("purchases").insert({
      email,
      pack_name: packName,
      access_token: accessToken,
    });
    if (insertError) {
      supabaseErrorMessage = insertError.message;
    }
  } catch (error) {
    supabaseErrorMessage =
      error instanceof Error ? error.message : "Unknown Supabase error.";
  }

  if (supabaseErrorMessage) {
    console.log("[stripe-webhook] purchases insert failed", {
      sessionId: session.id,
      to: email,
      packName,
      message: supabaseErrorMessage,
    });
    return NextResponse.json({ error: "Purchase persistence failed." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const idempotencyKey = `paid-pack/${session.id}`;

  const { data, error } = await resend.emails.send(
    {
      from: `${SITE_NAME} <hello@envowl.com>`,
      to: [email],
      subject: "Your Envowl pack is ready",
      html: packPurchaseEmailHtml(promptUrl, packTitle),
    },
    { idempotencyKey }
  );

  if (error) {
    console.log("[stripe-webhook] Resend error", {
      sessionId: session.id,
      to: email,
      packName,
      message: error.message,
    });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log("[stripe-webhook] sent pack delivery email", {
    sessionId: session.id,
    to: email,
    packName,
    resendEmailId: data?.id ?? null,
  });

  return NextResponse.json({ received: true });
}
