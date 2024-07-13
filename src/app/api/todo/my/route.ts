import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const reqTodo = await req.json();

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
      const defaultCalendarId = myCalendarIds[0].id;
      const newTodo = {
        defaultCalendarId,
        userId,
        ...reqTodo,
      };

      const { status, statusText } = await supabase.from("default_todos").insert(newTodo).single();

      return NextResponse.json({ status, statusText });
    }
  }

  return NextResponse.json(";ㅅ;", { status: 500 });
}

export async function PATCH(req: NextRequest) {
  if (req.method === "PATCH") {
    const supabase = createClient();
    const { searchParams } = new URL(req.url);
    const todoId = searchParams.get("todoId");

    const updatedTodo = await req.json();

    if (todoId && updatedTodo) {
      const { data, error } = await supabase
        .from("default_todos")
        .update(updatedTodo)
        .eq("id", todoId)
        .select()
        .single();

      if (error) {
        console.log(error);
        return NextResponse.json({ error: "업데이트 실패" });
      }

      return NextResponse.json({ data });
    }
    return NextResponse.json({ error: ";ㅅ;" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (req.method === "DELETE") {
    const supabase = createClient();

    try {
      const todoId = await req.json();

      const { data, error } = await supabase.from("default_todos").delete().eq("id", todoId);

      if (error) {
        throw error;
      }
      return NextResponse.json({ message: "성공적으로 삭제되었습니다." });
    } catch (e) {
      return NextResponse.json({ error: "삭제에 실패했습니다" }, { status: 500 });
    }
  }
}
