import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  // 캘린더 Id 받아오기
  const { searchParams } = new URL(req.url);
  const calendarId = searchParams.get("calendarId");
  const supabase = createClient();

  if (calendarId) {
    const { data: todos, error: todoError } = await supabase
      .from("todos")
      .select("*")
      .eq("calendarId", calendarId);

    if (todoError) NextResponse.json("fetch 실패");

    if (todos) {
      console.log(todos);
      console.log("asd");
      return NextResponse.json({ todos });
    }
  }

  //
  return NextResponse.json(";ㅅ;", { status: 500 });
}
