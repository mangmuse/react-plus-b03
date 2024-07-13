import { useMutation } from "@tanstack/react-query";

type newCalendar = {
  name: string;
  description: string;
};

type newTodo = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
};
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useScheduleMutation = () => {
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

  const { mutateAsync: addTodo } = useMutation({
    mutationFn: async (newTodo: newTodo) => {
      const res = await fetch(`${BASE_URL}/api/todo`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!res.ok) {
        throw new Error("Todo 생성 실패");
      }
      return res.json();
    },
  });

  return { createCalendar, addTodo };
};

export default useScheduleMutation;
