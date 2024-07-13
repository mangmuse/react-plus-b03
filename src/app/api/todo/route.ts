import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  // 캘린더id, todo내용 받아오기
  const supabase = createClient();

  console.log("asdasd");
  const reqNewTodo = await req.json();
  console.log("newTodonewTodonewTodonewTodonewTodonewTodonewTodonewTodo");

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

export async function DELETE(req: NextRequest) {
  if (req.method === "DELETE") {
    const supabase = createClient();

    try {
      const todoId = await req.json();
      console.log(todoId);
      console.log(
        "todoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoID",
      );
      const { data, error } = await supabase.from("todos").delete().eq("id", todoId);

      if (error) {
        throw error;
      }
      return NextResponse.json({ message: "성공적으로 삭제되었습니다." });
    } catch (e) {
      return NextResponse.json({ error: "삭제에 실패했습니다" }, { status: 500 });
    }
  }
}
