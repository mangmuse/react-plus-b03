"use client";

import { useAddCommentMutation } from "@/hooks/useMutation/useAddCommentsMutation";
import { useCommentQuery } from "@/hooks/useQuery/useCommentsQuery";
import { useUserStore } from "@/store/useUserStore";
import { Tables } from "@/types/supabase";
import Image from "next/image";
import React, { useState } from "react";

type NewComment = Omit<Tables<"comments">, "id" | "createdAt">;

interface CommentsProps {
  calendarId: string;
}

const ContentInput = ({ calendarId }: CommentsProps) => {
  const [content, setContent] = useState<NewComment["content"]>("");
  const mutation = useAddCommentMutation(calendarId);

  const userId = useUserStore((state) => state.id);
  const userNickname = useUserStore((state) => state.nickname);
  const userImage = null; // 아직 없던뎅? ;ㅅ;

  const { data: comments } = useCommentQuery(calendarId);
  const commentCount = comments ? comments.length : 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId && userNickname) {
      const newComment: NewComment = {
        content,
        calendarId,
        userId,
      };
      mutation.mutate(newComment);
      setContent("");
    } else {
      console.error("로그인되어 있지 않은 사용자입니다.");
    }
  };

  return (
    <>
      <div className="flex mb-2 mt-6 gap-2 items-center">
        <Image src="/comment-icon.png" alt="말풍선" width={25} height={25} />
        <span className="h-[20px] leading-6 text-zinc-900/[0.5] text-xs font-semibold">댓글</span>
        <div className="mt-1 w-[20px] h-[20px] leading-4 rounded-md bg-black/[0.5] text-center">
          <span className="text-[#fff] text-xs font-bold">{commentCount}</span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center relative mt-2 w-full h-[100px] rounded-xl border-2 border-[rgb(28, 29, 34, 0.06)]"
      >
        <input
          type="text"
          placeholder="댓글을 남겨보세요"
          className="w-full h-full pl-4 pr-14 rounded-xl focus:outline-none"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button
          className="text-[0.63rem] w-[50px] h-[21px] absolute bottom-2 right-2 rounded-3xl border-2 border-[rgba(28, 29, 34, 0.06)]"
          type="submit"
        >
          등록
        </button>
      </form>
    </>
  );
};

export default ContentInput;
