import { TTodoForm } from "@/types/scheduler.type";

export const validateTodo = (todo: TTodoForm): boolean => {
  return todo.title?.trim() === "" || todo.startDate === "" || todo.endDate === "";
};
