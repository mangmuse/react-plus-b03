import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(req: NextRequest) {
  // 캘린더id, todo내용 받아오기
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (user && !userError) {
    const { id: userId } = user;
    const { data: myCalendarData, error: myCalendarError } = await supabase
      .from("default_calendars")
      .select("id")
      .eq("userId", userId);

    console.log("asdasd");

    if (myCalendarError || !myCalendarData) {
      return NextResponse.json({ error: "캘린더 id가 없어요" }, { status: 404 });
    }

    const { id: myCalendarId } = myCalendarData[0];
    console.log(myCalendarId);
    const { data: todos, error: todosError } = await supabase
      .from("default_todos")
      .select("*")
      .eq("defaultCalendarId", myCalendarId);

    if (todosError) {
      return NextResponse.json({ error: "default todo fetch 실패" }, { status: 500 });
    }
    console.log(todos);
    return NextResponse.json({ todos });
  }

  return NextResponse.json(";ㅅ;", { status: 500 });
}
