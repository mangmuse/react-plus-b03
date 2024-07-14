import { getSupabaseClient } from "@/utils/supabase/client"; // 서버 사이드에서 Supabase 클라이언트를 가져오는 함수
export const fetchUserProfile = async () => {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    const { user } = data;
    const { data: profile, error: profileError } = await supabase
      .from("users")
      .select("nickname, email, image_url")
      .eq("id", user.id) // 'id' 필드를 사용하여 사용자를 식별합니다.
      .single();
    if (profileError) {
      console.error("Error fetching user profile:", profileError);
      return null;
    } else {
      return profile;
    }
  } else if (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const updateUserProfile = async (profile: {
  email: string;
  nickname: string;
  image_url: string | null;
}) => {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    const userId = data.user.id;
    const { data: updatedData, error: updateError } = await supabase
      .from("users")
      .update(profile)
      .eq("id", userId);
    if (updateError) {
      console.error("Error updating profile:", updateError);
      return false;
    } else {
      return true;
    }
  } else if (error) {
    console.error("Error fetching user:", error);
    return false;
  }
};