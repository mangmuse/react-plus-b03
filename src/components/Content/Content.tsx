"use client";

import { useDeleteCommentMutation } from "@/hooks/useMutation/useDeleteCommentsMutation";
import { useUpdateCommentMutation } from "@/hooks/useMutation/useUpdateCommentMutation";
import { useModal } from "@/services/modal/modal.context";
import { useUserStore } from "@/store/useasdStore";
import { Tables } from "@/types/supabase";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import Input from "../Input";
Image;

interface ContentProps {
  comment: Tables<"comments"> & { user?: { nickname: string; image_url: string } };
  calendarId: string;
}

const Content = ({ comment, calendarId }: ContentProps) => {
  const currentUserNickname = useUserStore((state) => state.nickname);
  // const currnetUserImageUrl = useUserStore((state) => state.image_url)
  const user = comment.user || { nickname: currentUserNickname || "Unknown", image_url: "" };

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const deleteCommentMutation = useDeleteCommentMutation(calendarId);
  const updateCommentMutation = useUpdateCommentMutation(calendarId);

  const modal = useModal();

  const handleDeleteModal = () => {
    modal.open({
      type: "confirm",
      content: "정말 삭제하시겠습니까?",
      onConfirm: handleDelete,
      onCancel: modal.close,
    });

    modal.close;
  };

  const handleEditModal = () => {
    modal.open({
      type: "confirm",
      content: "정말 수정하시겠습니까?",
      onConfirm: handleUpdate,
      onCancel: modal.close,
    });

    modal.close;
  };

  const formattedDate = comment.createdAt
    ? format(new Date(comment.createdAt), "yyyy. MM. dd aa hh:mm")
    : "";

  const handleDelete = () => {
    deleteCommentMutation.mutate(comment.id, {
      onSuccess: () => {
        modal.close();
      },
    });
  };

  const handleUpdate = () => {
    updateCommentMutation.mutate(
      { id: comment.id, content: editedContent },
      {
        onSuccess: () => {
          modal.close();
        },
      },
    );
    setIsEditing(false);
  };

  const handleEditToogle = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="mt-5 w-full h-[120px] rounded-xl border-2 border-[rgb(28, 29, 34, 0.06)]">
      <div className="flex items-center gap-7 pl-5 relative ">
        <div className="w-[40px] h-[40px] border-2 rounded-3xl mt-4 relative">
          {user.image_url && (
            <Image className="object-contain" src={user.image_url} alt="유저이미지" fill />
          )}
        </div>

        <div className="flex flex-col mt-4 w-full">
          <span className="text-sm font-medium text-zinc-900/[0.5]">{user.nickname}</span>
          <button className="w-[15px] h-[15px] absolute top-3 right-4" onClick={handleDeleteModal}>
            <Image src="/cancel.png" alt="삭제" width={20} height={20} />
          </button>
          <button className="w-[15px] h-[15px] absolute top-3 right-10" onClick={handleEditToogle}>
            <Image src="/pencil.png" alt="수정" width={20} height={20} />
          </button>

          {isEditing ? (
            <div className="relative w-full mb-2">
              <Input
                type="text"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="font-bold w-[89%] border border-gray-300 rounded-lg p-2 pr-12"
              />
              <button
                onClick={handleEditModal}
                className="text-[0.63rem] w-[50px] h-[21px] absolute bottom-2 right-4 rounded-3xl border-2 border-[rgba(28, 29, 34, 0.06)]"
              >
                저장
              </button>
            </div>
          ) : (
            <span className="font-bold m-2">{comment.content}</span>
          )}

          <span className="text-[0.50rem] font-semibold">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
