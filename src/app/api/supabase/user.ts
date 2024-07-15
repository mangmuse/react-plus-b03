// supabase auth server에서 로그인 유저 확인

import { getSupabaseClient } from "@/utils/supabase/client";

// 신뢰도 높음
export async function getCurrentUser() {
  const supabase = getSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return { user, error };
}

// 로컬 스토리지 혹은 쿠키에서 로그인 유저 확인
// 신뢰도 낮음
export async function getCurrentSession() {
  const supabase = getSupabaseClient();
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  return { session, error };
}

// user 테이블 값 가져오기
export const getUserData = async (email: string) => {
  const supabase = getSupabaseClient();
  return await supabase
  .from("users")
  .select("id, email, nickname, image_url")
  .eq("email", email)
  .single();
};






