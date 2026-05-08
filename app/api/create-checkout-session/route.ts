import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { isPaidPackSlug } from "@/lib/paid-pack-access";
import { SITE_URL } from "@/lib/seo";

export const runtime = "nodejs";

type Body = {
  email?: string;
  packName?: string;
};

const PRICE_ENV_BY_PACK = {
  "claude-for-life": "STRIPE_PRICE_CLAUDE_LIFE",
  "claude-for-business": "STRIPE_PRICE_CLAUDE_BUSINESS",
} as const;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getAppOrigin(request: NextRequest): string {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto") ?? "https";
  if (forwardedHost) return `${forwardedProto}://${forwardedHost}`;

  const host = request.headers.get("host");
  if (host) {
    const proto =
      host.startsWith("localhost") || host.startsWith("127.")
        ? "http"
        : forwardedProto;
    return `${proto}://${host}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  }

  return SITE_URL.replace(/\/$/, "");
}

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) {
    throw new Error("missing_stripe_secret");
  }
  return new Stripe(key, {
    apiVersion: "2026-04-22.dahlia",
  });
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

  const packNameRaw = String(body.packName ?? "").trim();
  if (!isPaidPackSlug(packNameRaw)) {
    return NextResponse.json(
      { success: false, message: "Invalid pack." },
      { status: 400 }
    );
  }

  const envKey = PRICE_ENV_BY_PACK[packNameRaw];
  const priceId = process.env[envKey]?.trim();
  if (!priceId) {
    return NextResponse.json(
      { success: false, message: "This product is not available right now." },
      { status: 503 }
    );
  }

  let stripe: Stripe;
  try {
    stripe = getStripe();
  } catch {
    return NextResponse.json(
      { success: false, message: "Payments are not configured." },
      { status: 503 }
    );
  }

  const origin = getAppOrigin(request);
  const successUrl = `${origin}/success?pack=${encodeURIComponent(packNameRaw)}`;
  const cancelUrl = `${origin}/shop`;

  let session: Stripe.Response<Stripe.Checkout.Session>;
  try {
    session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      metadata: {
        packName: packNameRaw,
      },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
  } catch (e) {
    const message =
      e instanceof Error ? e.message : "Could not start checkout. Try again.";
    return NextResponse.json({ success: false, message }, { status: 502 });
  }

  if (!session.url) {
    return NextResponse.json(
      { success: false, message: "Could not start checkout. Try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, url: session.url });
}
