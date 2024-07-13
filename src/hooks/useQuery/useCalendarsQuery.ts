import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";

const useCalendarsQuery = () => {
  const {
    data: calendars,
    error,
    isPending,
  } = useQuery({
    queryKey: ["calendars"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/api/calendars`);

      if (!res.ok) {
        throw new Error("캘린더를 가져오지 못했습니다.");
      }
      const calendars = res.json();

      return calendars;
    },
  });
  return { calendars, error, isPending };
};

export default useCalendarsQuery;
