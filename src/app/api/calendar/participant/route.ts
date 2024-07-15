import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { email, calendarId } = await req.json();

  if (!email || !calendarId) {
    return NextResponse.json(
      { error: "email과 calendarId를 모두 제공해야 합니다." },
      { status: 400 },
    );
  }

  try {
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (userError || !user) {
      throw new Error("사용자를 찾을 수 없습니다.");
    }

    const userId = user.id;

    const { data: participant, error: participantError } = await supabase
      .from("participants")
      .insert({ userId, calendarId })
      .single();

    if (participantError) {
      if (participantError.code === "23505") {
        return NextResponse.json(
          { error: "해당 사용자는 이미 이 캘린더에 참가 중입니다." },
          { status: 409 },
        );
      }
      throw participantError;
    }

    return NextResponse.json({ message: "성공적으로 추가되었습니다.", participant });
  } catch (error) {
    console.error("에러:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
