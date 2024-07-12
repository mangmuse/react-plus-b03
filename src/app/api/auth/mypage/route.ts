import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

const supabase = createClient();

interface UserProfile {
  email: string;
  nickname: string;
  image_url: string;
}

export const fetchUserProfile = async (userId: string) => {
  const { data: profile, error: profileError } = await supabase
    .from("users")
    .select("nickname, email, image_url")
    .eq("id", userId)
    .single();
  if (profileError) {
    console.error(profileError);
    return null;
  }
  return profile;
};

export const updateUserProfile = async (
  userId: string,
  profile: UserProfile
) => {
  const { error } = await supabase
    .from("users")
    .update(profile)
    .eq("id", userId);
  if (error) {
    console.error(error);
    return false;
  }
  return true;
};

export async function PUT(request: Request) {
  try {
    const { userId, profile } = await request.json();

    console.log("Updating user profile:", userId, profile); // 디버깅을 위해 로그 추가

    const success = await updateUserProfile(userId, profile);

    if (success) {
      return NextResponse.json({ message: "Profile updated successfully" });
    } else {
      return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}