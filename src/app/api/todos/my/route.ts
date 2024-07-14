import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { getBetweenDates } from "@/utils/formatSchedules";

export async function GET(req: NextRequest) {
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

    if (myCalendarError || !myCalendarData) {
      return NextResponse.json({ error: "캘린더 id가 없어요" }, { status: 404 });
    }

    const { id: myCalendarId } = myCalendarData[0];
    const { data: todos, error: todosError } = await supabase
      .from("default_todos")
      .select("*")
      .eq("defaultCalendarId", myCalendarId);

    if (todosError) {
      return NextResponse.json({ error: "default todo fetch 실패" }, { status: 500 });
    }

    const todosWithDateArray = todos.map((todo) => ({
      ...todo,
      dateArray: getBetweenDates(todo.startDate!, todo.endDate!),
    }));

    return NextResponse.json({ todos: todosWithDateArray });
  }

  return NextResponse.json(";ㅅ;", { status: 500 });
}
