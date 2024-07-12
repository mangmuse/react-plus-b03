import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  // 캘린더id, todo내용 받아오기
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (user && !userError) {
    const { id: userId } = user;
    const newTodo = {
      calendarId: "1afbfb2c-850e-49a5-bc83-558bd3e5f68e",
      title: "테스트테스트",
      description: "테스트디스크립션",
      startDate: "2024-07-12",
      endDate: "2024-07-14",
    };

    const { status: insertStatus } = await supabase
      .from("todos")
      .insert(newTodo)
      .single();

    return NextResponse.json(insertStatus);
  }

  return NextResponse.json(";ㅅ;", { status: 500 });
}
