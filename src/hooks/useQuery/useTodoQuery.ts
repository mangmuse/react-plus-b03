"use client";

import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";

const useTodoQuery = (todoId: string) => {
  const {
    data: todo,
    error,
    isPending,
  } = useQuery({
    queryKey: ["todos", { todoId }],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/api/todo?todoId=${todoId}`, {
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("todo를 가져오지 못했습니다.");
      }
      const todo = await res.json();
      console.log(todo);
      return todo.todo;
    },
  });
  return { todo, error, isPending };
};

export default useTodoQuery;
