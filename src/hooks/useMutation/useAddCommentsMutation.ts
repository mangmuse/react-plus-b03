import { Tables } from "@/types/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "./useScheduleMutation";

type NewComment = Omit<Tables<"comments">, "id" | "createdAt">;

const addComment = async (newComment: NewComment): Promise<Tables<"comments">> => {
  const response = await fetch(`${BASE_URL}/api/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  });

  if (!response.ok) {
    throw new Error("댓글을 추가할 수 없습니다");
  }

  return response.json();
};

export const useAddCommentMutation = (calendarId: string) => {
  const queryClient = useQueryClient();

  return useMutation<Tables<"comments">, Error, NewComment>({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", calendarId] });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
