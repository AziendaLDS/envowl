import { NextRequest, NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubscribeBody = {
  email?: string;
  type?: string;
  source?: string;
};

/**
 * POST JSON to subscribe via Beehiiv V2 Create Subscription.
 * Success: 200 { "success": true }
 * Failure: 500 { "error": string } (or 400 for validation)
 */
export async function POST(request: NextRequest) {
  let body: SubscribeBody;
  const contentType = request.headers.get("content-type") ?? "";

  try {
    if (contentType.includes("application/json")) {
      body = (await request.json()) as SubscribeBody;
    } else {
      const formData = await request.formData();
      body = {
        email: String(formData.get("email") ?? ""),
        type: String(formData.get("type") ?? "client"),
        source: String(formData.get("source") ?? "website"),
      };
    }
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const email = String(body.email ?? "").trim();
  const type = body.type === "creator" ? "creator" : "client";
  const source = String(body.source ?? "website").slice(0, 200);

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 },
    );
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.error(
      "[subscribe] Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID",
    );
    return NextResponse.json(
      { error: "Newsletter signup is not configured" },
      { status: 500 },
    );
  }

  const pubId = publicationId.replace(/^\/+|\/+$/g, "");

  try {
    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${encodeURIComponent(pubId)}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: source,
          utm_campaign: `signup_${type}`,
        }),
      },
    );

    const raw = await beehiivRes.text();

    if (!beehiivRes.ok) {
      const message = parseBeehiivError(raw, beehiivRes.status);
      console.error("[subscribe] Beehiiv error:", beehiivRes.status, raw);
      return NextResponse.json({ error: message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to reach subscription service";
    console.error("[subscribe] Request failed:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function parseBeehiivError(body: string, status: number): string {
  if (!body) {
    return `Beehiiv request failed (${status})`;
  }
  try {
    const j = JSON.parse(body) as Record<string, unknown>;
    if (typeof j.message === "string" && j.message) return j.message;
    if (Array.isArray(j.errors) && j.errors.length) {
      const first = j.errors[0];
      if (typeof first === "string") return first;
      if (first && typeof first === "object" && "message" in first) {
        const m = (first as { message?: string }).message;
        if (typeof m === "string") return m;
      }
    }
  } catch {
    /* use raw */
  }
  const trimmed = body.trim();
  if (trimmed.length <= 280) return trimmed;
  return `${trimmed.slice(0, 277)}…`;
}
