import { Database, Tables } from "@/types/supabase";
import { useMutation } from "@tanstack/react-query";

type newCalendar = {
  name: string;
  description: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useCalendarMutation = () => {
  const { mutateAsync: createCalendar } = useMutation({
    mutationFn: async (newCalendar: newCalendar) => {
      const res = await fetch(`${BASE_URL}/api/calendar`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newCalendar),
      });
      if (!res.ok) {
        throw new Error("캘린더 생성 실패");
      }
      return res.json();
    },
  });

  return { createCalendar };
};

export default useCalendarMutation;
