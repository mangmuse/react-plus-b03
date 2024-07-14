"use client";
import { Tables } from "../../types/supabase";

import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";
import { TDefaultTodoRes } from "@/types/scheduler.type";

type Ttodos = {
  todos: TDefaultTodoRes;
};

const useMyTodoQuery = (todoId: string) => {
  const {
    data: todo,
    error,
    isPending,
  } = useQuery<Ttodos, Error>({
    queryKey: ["default_todo", { todoId }],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/api/todo/my?todoId=${todoId}`, {
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

export default useMyTodoQuery;
