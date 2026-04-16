import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

type WaitlistBody = {
  email?: string;
  role?: string;
  source?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: WaitlistBody;

  try {
    body = (await request.json()) as WaitlistBody;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = String(body.email ?? "").trim();
  const role = body.role === "creator" ? "creator" : "client";
  const source = String(body.source ?? "website").slice(0, 200);

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email address." },
      { status: 400 }
    );
  }

  const { error: dbError } = await supabase.from("waitlist").insert({ email, role, source });

  if (dbError) {
    if (dbError.code === "23505") {
      return NextResponse.json(
        { success: false, message: "You're already on the list." },
        { status: 200 }
      );
    }

    console.error("[waitlist] Supabase insert failed:", dbError);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Try again." },
      { status: 500 }
    );
  }

  const beehiivApiKey = process.env.BEEHIIV_API_KEY;
  const beehiivPublicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!beehiivApiKey || !beehiivPublicationId) {
    console.warn("[waitlist] Missing Beehiiv env vars; skipping Beehiiv submission.");
  } else {
    try {
      console.log("Attempting Beehiiv submission for: " + email);
      const beehiivRes = await fetch(
        `https://api.beehiiv.com/v2/publications/${encodeURIComponent(beehiivPublicationId)}/subscriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${beehiivApiKey}`,
          },
          body: JSON.stringify({
            email,
            reactivate_existing: false,
            send_welcome_email: true,
            utm_source: source ?? "website",
          }),
        }
      );

      const beehiivBody = await beehiivRes.json();
      console.log("Beehiiv status:", beehiivRes.status);
      console.log("Beehiiv response:", JSON.stringify(beehiivBody));

      if (!beehiivRes.ok) {
        console.error("Beehiiv subscription failed:", beehiivRes.status, JSON.stringify(beehiivBody));
      }
    } catch (error) {
      console.error("Beehiiv subscription error:", error);
    }
  }

  return NextResponse.json(
    { success: true, message: "You're on the list." },
    { status: 200 }
  );
}
