"use client";

import { useQuery } from "@tanstack/react-query";
import { TDefaultTodoRes } from "@/types/scheduler.type";
import { getTodos } from "@/utils/api/schedule.api";

const useTodosQuery = (calendarId: string) => {
  const {
    data: todos,
    error,
    isPending,
  } = useQuery<TDefaultTodoRes[]>({
    queryKey: ["todos", { calendarId }],
    queryFn: () => getTodos(calendarId),
  });
  return { todos, error, isPending };
};

export default useTodosQuery;
