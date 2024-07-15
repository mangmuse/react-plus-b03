import { Tables } from "@/types/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "./useScheduleMutation";

const updateComment = async ({ id, content }: { id: string; content: string }) => {
  const response = await fetch(`${BASE_URL}/api/comments`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, content }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "댓글 수정 실패했습니다.");
  }

  return response.json();
};

export const useUpdateCommentMutation = (calendarId: string) => {
  const queryClient = useQueryClient();

  return useMutation<Tables<"comments">, Error, { id: string; content: string }>({
    mutationFn: updateComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", calendarId] });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
