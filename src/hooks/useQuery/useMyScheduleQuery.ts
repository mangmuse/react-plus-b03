"use client";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";
import { useUserStore } from "@/store/useasdStore";
import { Tables } from "@/types/supabase";

export type todo = Partial<Tables<"default_todos">>;

type todos = {
  todos: todo[];
};

const useMyScheduleQuery = () => {
  const { id } = useUserStore();
  const {
    data: todos,
    error,
    isPending,
  } = useQuery<todo[], Error>({
    queryKey: ["default_todos"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/api/todos/my`);

      if (!res.ok) {
        throw new Error("캘린더를 가져오지 못했습니다.");
      }
      const todos: todos = await res.json();
      return todos.todos || [];
    },
  });
  return { todos, error, isPending };
};

export default useMyScheduleQuery;
