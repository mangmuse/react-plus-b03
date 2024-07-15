import { Tables } from "@/types/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "./useScheduleMutation";

const deleteComment = async (id: string): Promise<Tables<"comments">> => {
  const response = await fetch(`${BASE_URL}/api/comments`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error("댓글 삭제에 실패했습니다");
  }

  return response.json();
};

export const useDeleteCommentMutation = (calendarId: string) => {
  const queryClient = useQueryClient();

  return useMutation<Tables<"comments">, Error, string>({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", calendarId] });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
