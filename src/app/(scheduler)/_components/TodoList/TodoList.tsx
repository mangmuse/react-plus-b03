"use client";

import TodoBlock from "../TodoBlock";
import useMyScheduleQuery from "@/hooks/useQuery/useMyScheduleQuery";
import useDateStore from "@/store/useDateStore";
import { TDefaultTodo } from "@/types/scheduler.type";
import { sortByCreatedAt } from "@/utils/formatSchedules";
import { format } from "date-fns";

const TodoList = ({ isImportantPage }: { isImportantPage?: boolean }) => {
  const selectedDate = useDateStore((state) => state.selectedDate);
  const { todos, error, isPending } = useMyScheduleQuery();
  const filteredTodos =
    todos && (isImportantPage ? todos.filter((todo) => todo.isImportant) : todos);
  const sortedTodos = filteredTodos && sortByCreatedAt(filteredTodos);

  const selectedDateString = selectedDate && format(selectedDate, "yyyy-MM-dd");
  const selectedDateTodos = sortedTodos?.filter((todo) =>
    todo.dateArray?.includes(selectedDateString),
  );

  const pendingTodos = selectedDateTodos?.filter((todo) => !todo.isDone) || [];
  const completedTodos = selectedDateTodos?.filter((todo) => todo.isDone) || [];

  return (
    <div className="flex flex-wrap gap-16  ">
      <TodoBlock todos={pendingTodos} title="미완료 TODO" />
      <TodoBlock todos={completedTodos} title="완료 TODO" />
      {/* <ShareTodoList />
      <ShareTodoList /> */}
    </div>
  );
};

export default TodoList;
