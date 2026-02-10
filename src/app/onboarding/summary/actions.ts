"use server";

import { createClient } from "@supabase/supabase-js";

type SaveComfortProfileInput = {
  childId: string;
  colors: string[];
  sound: string;
  attention: string;
  sensory: string[];
  movement: string;
};

export async function saveComfortProfile(input: SaveComfortProfileInput) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { error } = await supabase.from("comfort_profiles").insert({
    child_id: input.childId,
    colors: input.colors,
    sound_preference: input.sound,
    attention_style: input.attention,
    sensory_preferences: input.sensory,
    movement_preference: input.movement,
  });

  if (error) {
    console.log("Supabase insert error:", error);
    return { success: false as const, error: error.message };
  }

  return { success: true as const };
}
