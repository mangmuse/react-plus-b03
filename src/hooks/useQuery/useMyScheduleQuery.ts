"use client";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";
import { useUserStore } from "@/store/useasdStore";
import { Tables } from "@/types/supabase";
import { TDefaultTodo, TDefaultTodoRes } from "@/types/scheduler.type";

type TdefaultTodos = {
  todos: TDefaultTodoRes[];
};

const useMyScheduleQuery = () => {
  const {
    data: todos,
    error,
    isPending,
  } = useQuery({
    queryKey: ["default_todos"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/api/todos/my`);

      if (!res.ok) {
        throw new Error("캘린더를 가져오지 못했습니다.");
      }
      const todos: TdefaultTodos = await res.json();
      return todos.todos || [];
    },
  });
  return { todos, error, isPending };
};

export default useMyScheduleQuery;
