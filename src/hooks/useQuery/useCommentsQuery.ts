import { Tables } from "@/types/supabase";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";

const fetchComments = async (calendarId: string): Promise<Tables<"comments">[]> => {
  const response = await fetch(`${BASE_URL}/api/comments?calendarId=${calendarId}`);

  if (!response.ok) {
    throw new Error("응답이 올바르지 않습니다.");
  }

  return response.json();
};

export const useCommentQuery = (calendarId: string) => {
  return useQuery<Tables<"comments">[], Error>({
    queryKey: ["comments", calendarId],
    queryFn: () => fetchComments(calendarId),
    enabled: !!calendarId,
  });
};
