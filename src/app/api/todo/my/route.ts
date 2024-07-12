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
    const { data: myCalendarIds, error: myCalendarError } = await supabase
      .from("default_calendars")
      .select("id")
      .eq("userId", userId);

    if (myCalendarError) {
      console.log(myCalendarError);
      return NextResponse.json("myCalendar fetch 실패");
    }
    if (myCalendarIds) {
      const calendarId = myCalendarIds[0].id;
      const newTodo = {
        calendarId,
        title: "디폴트테스트테스트",
        description: "디폴트테스트디스크립션",
        startDate: "2024-07-12",
        endDate: "2024-07-14",
      };

      const { status, statusText } = await supabase
        .from("default_todos")
        .insert(newTodo)
        .single();

      return NextResponse.json({ status, statusText });
    }
  }

  return NextResponse.json(";ㅅ;", { status: 500 });
}
