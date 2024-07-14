import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import useTodoQuery from "@/hooks/useQuery/useMyTodoQuery";

// export async function GET(req: NextRequest) {
//   const supabase = createClient();
//   const { searchParams } = new URL(req.url);
//   const todoId = searchParams.get("todoId");
//   console.log("혹시 여기로 요청갔나?");

//   if (!todoId) {
//     return NextResponse.json({ error: "todoId가 없습니다" });
//   }
//   const { data: todo, error } = await supabase.from("todos").select("*").eq("id", todoId).single();

//   if (error) {
//     return NextResponse.json({ error: "todo를 가져오지 못했습니다" });
//   }
// }

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

export async function PATCH(req: NextRequest) {
  if (req.method === "PATCH") {
    const supabase = createClient();
    const { searchParams } = new URL(req.url);
    const todoId = searchParams.get("todoId");

    const updatedTodo = await req.json();

    if (todoId && updatedTodo) {
      console.log(
        "패치실행패치실행패치실행패치실행패치실행패치실행패치실행패치실행패치실행패치실행",
      );
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
      console.log(data);
      console.log(
        "패치왜안돼패치왜안돼패치왜안돼패치왜안돼패치왜안돼패치왜안돼패치왜안돼패치왜안돼패치왜안돼패치왜안돼",
      );
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
      const todoId = await req.json();
      console.log(todoId);
      console.log(
        "이거 딜리트투두아이디이거 딜리트투두아이디이거 딜리트투두아이디이거 딜리트투두아이디이거 딜리트투두아이디이거 딜리트투두아이디",
      );
      console.log(
        "todoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoIDtodoID",
      );
      const { data, error } = await supabase.from("todos").delete().eq("id", todoId);

      if (error) {
        throw error;
      }
      return NextResponse.json({ message: "성공적으저로 삭제되었습니다." });
    } catch (e) {
      return NextResponse.json({ error: "삭제에 실패했습니다" }, { status: 500 });
    }
  }
}
