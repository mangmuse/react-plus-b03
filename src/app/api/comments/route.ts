import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// get = 모든 댓글 가져오기
export async function GET(req: NextRequest) {
  const supabase = createClient();
  const calendarId = req.nextUrl.searchParams.get("calendarId");

  if (!calendarId) {
    return NextResponse.json({ error: "해당 캘린더는 존재하지 않습니다." });
  }

  const { data, error: getCommentError } = await supabase
    .from("comments")
    .select(`*, users:users (nickname, image_url)`)
    .eq("calendarId", calendarId);

  if (getCommentError) {
    console.error(getCommentError.message);
    return NextResponse.json({ error: getCommentError.message });
  }

  return NextResponse.json(data);
}

// post - 캘린더 id, 유저(닉넴, 프로필 이미지), 작성시간, 댓글 내용
export async function POST(req: NextRequest) {
  const supabase = createClient();

  const { content, calendarId, userId } = await req.json();

  if (!content || !calendarId || !userId) {
    return NextResponse.json({ error: "공백없이 입력해주세요" });
  }

  const newComment = {
    content,
    calendarId,
    userId,
  };

  const { data: postComment, error: postCommentError } = await supabase
    .from("comments")
    .insert(newComment)
    .single();

  if (postCommentError) {
    console.error(postCommentError.message);
    return NextResponse.json({ postCommentError: postCommentError.message });
  }

  return NextResponse.json(postComment);
}

// put - 댓글 내용, 아이디
export async function PUT(req: NextRequest) {
  const supabase = createClient();
  const { id, content } = await req.json();

  if (!id || !content) {
    return NextResponse.json({ error: "존재하지 않는 댓글입니다" });
  }

  const { data: updateComment, error: updateCommentError } = await supabase
    .from("comments")
    .update({ content })
    .eq("id", id)
    .order("id", { ascending: true })
    .limit(1)
    .single();

  if (updateCommentError) {
    console.error(updateCommentError.message);
    return NextResponse.json({ updateCommentError: updateCommentError.message });
  }

  return NextResponse.json({ success: true });
}

// delete - 댓글 아이디
export async function DELETE(req: NextRequest) {
  const supabase = createClient();
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "존재하지 않는 댓글입니다." });
  }

  const { error: deleteCommentError } = await supabase.from("comments").delete().eq("id", id);

  if (deleteCommentError) {
    console.error(deleteCommentError.message);
    return NextResponse.json({ deleteCommentError: deleteCommentError.message });
  }

  return NextResponse.json({ success: true });
}
