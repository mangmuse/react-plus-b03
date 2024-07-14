import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = createClient();

  const reqNewTodo = await req.json();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (user && !userError) {
    console.log(user);
    const { id: userId } = user;

    const newNewTodo = {
      ...reqNewTodo,
      userId,
    };

    const { status: insertStatus } = await supabase.from("todos").insert(newNewTodo).single();

    return NextResponse.json(insertStatus);
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
        .from("todos")
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
    console.log("dqwdhjqwoidhqwoidhqwhdioqwhdihqwo");
    try {
      const todo = await req.json();
      const todoId = todo.id;

      const { data, error } = await supabase.from("todos").delete().eq("id", todoId);

      if (error) {
        console.log(error);
      }
      return NextResponse.json({ message: "성공적으저로 삭제되었습니다." });
    } catch (e) {
      return NextResponse.json({ error: "삭제에 실패했습니다" }, { status: 500 });
    }
  }
}
