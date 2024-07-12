import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  // 캘린더 Id 받아오기
  const supabase = createClient();

  const calendarId = "1afbfb2c-850e-49a5-bc83-558bd3e5f68e";
  const { data: todos, error: todoError } = await supabase
    .from("todos")
    .select("*")
    .eq("calendarId", calendarId);

  if (todoError) NextResponse.json("fetch 실패");

  if (todos) {
    console.log(todos);
    return NextResponse.json({ todos });
  }

  //
  return NextResponse.json(";ㅅ;", { status: 500 });
}
