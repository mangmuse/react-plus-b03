import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";

const useCalendarsQuery = (calendarId: string) => {
  const {
    data: todos,
    error,
    isPending,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/api/calendars`, {
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(calendarId),
      });

      if (!res.ok) {
        throw new Error("캘린더를 가져오지 못했습니다.");
      }
      const todos = res.json();

      return todos;
    },
  });
  return { todos, error, isPending };
};

export default useCalendarsQuery;
