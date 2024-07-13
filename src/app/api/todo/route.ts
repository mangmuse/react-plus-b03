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
      calendarId: "6f072435-25ed-4a19-9f0d-daa5a8e4ff66",
      title: "테스트테스트",
      description: "테스트디스크립션",
      startDate: "2024-07-12",
      endDate: "2024-07-14",
    };

    const { status: insertStatus } = await supabase.from("todos").insert(newTodo).single();

    return NextResponse.json(insertStatus);
  }

  return NextResponse.json(";ㅅ;", { status: 500 });
}
