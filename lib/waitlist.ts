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

  return { success: true, message: "You're on the list." };
}
