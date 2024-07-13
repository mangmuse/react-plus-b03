import { getBetweenDates } from "@/utils/formatSchedules";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const calendarId = searchParams.get("calendarId");
  const supabase = createClient();
  console.log(calendarId);

  if (calendarId) {
    const { data: todos, error: todoError } = await supabase
      .from("todos")
      .select("*")
      .eq("calendarId", calendarId);

    if (todoError) return NextResponse.json("fetch 실패");

    if (todos) {
      console.log(todos);
      console.log("asd");

      const resTodos = await Promise.all(
        todos.map(async (todo) => {
          const { data: user, error: userError } = await supabase
            .from("users")
            .select("nickname")
            .eq("id", todo.userId!)
            .single();

          if (userError) {
            console.error(`유저를 찾을 수 없습니다 ${todo.userId}`);
            return {
              ...todo,
              dateArray: getBetweenDates(todo.startDate!, todo.endDate!),
              nickname: null,
            };
          }

          return {
            ...todo,
            dateArray: getBetweenDates(todo.startDate!, todo.endDate!),
            nickname: user?.nickname || null,
          };
        }),
      );

      return NextResponse.json({ todos: resTodos });
    }
  }

  return NextResponse.json(";ㅅ;", { status: 500 });
}
