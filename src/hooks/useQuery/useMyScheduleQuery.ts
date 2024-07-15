"use client";
import { useQuery } from "@tanstack/react-query";

import { TDefaultTodoRes } from "@/types/scheduler.type";
import { getDefaultTodos } from "@/utils/api/schedule.api";

export type TdefaultTodos = {
  todos: TDefaultTodoRes[];
};

const useMyScheduleQuery = () => {
  const {
    data: todos,
    error,
    isPending,
  } = useQuery({
    queryKey: ["default_todos"],
    queryFn: getDefaultTodos,
  });
  return { todos, error, isPending };
};

export default useMyScheduleQuery;
