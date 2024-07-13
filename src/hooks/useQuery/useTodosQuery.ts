"use client";

import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";

const useTodosQuery = (calendarId: string) => {
  const {
    data: todos,
    error,
    isPending,
  } = useQuery({
    queryKey: ["todos", { calendarId }],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/api/todos?calendarId=${calendarId}`, {
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("캘린더를 가져오지 못했습니다.");
      }
      const todos = await res.json();
      console.log(todos);
      return todos.todos;
    },
  });
  return { todos, error, isPending };
};

export default useTodosQuery;
