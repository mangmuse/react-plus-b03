import {
  createClient as createSupabaseClient,
  SupabaseClient,
} from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or anonymous key");
}

let supabase: SupabaseClient | undefined;

export function getSupabaseClient(): SupabaseClient {
  if (!supabase) {
    supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey);
  }
  return supabase;
}
