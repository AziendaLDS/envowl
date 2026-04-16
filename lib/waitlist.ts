import { supabase } from "./supabase";

interface WaitlistEntry {
  email: string;
  role?: string;
  source?: string;
}

export async function submitToWaitlist({ email, role, source }: WaitlistEntry) {
  const { error: dbError } = await supabase.from("waitlist").insert({ email, role, source });

  if (dbError) {
    if (dbError.code === "23505") {
      return { success: false, message: "You're already on the list." };
    }
    throw dbError;
  }

  try {
    const beehiivApiKey = process.env.BEEHIIV_API_KEY;
    if (!beehiivApiKey) {
      console.warn("Beehiiv API key is missing. Skipping Beehiiv subscription.");
    } else {
      console.log("Attempting Beehiiv submission for: " + email);
      const beehiivRes = await fetch(
        "https://api.beehiiv.com/v2/publications/pub_efd97886-adbd-48b8-b1a6-8a202556d5c7/subscriptions",
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
    }
  } catch (error) {
    console.error("Beehiiv subscription error:", error);
  }

  return { success: true, message: "You're on the list." };
}
