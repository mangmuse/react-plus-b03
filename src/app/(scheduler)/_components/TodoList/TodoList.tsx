"use client";

import TodoBlock from "../TodoBlock";
import useMyScheduleQuery, { TDefaultTodo } from "@/hooks/useQuery/useMyScheduleQuery";
import useDateStore from "@/store/useDateStore";
import { sortByCreatedAt } from "@/utils/formatSchedules";
import { format } from "date-fns";

const TodoList = ({ isImportantPage }: { isImportantPage?: boolean }) => {
  const selectedDate = useDateStore((state) => state.selectedDate);
  console.log(isImportantPage);
  const { todos, error, isPending } = useMyScheduleQuery();
  const filteredTodos =
    todos && (isImportantPage ? todos.filter((todo) => todo.isImportant) : todos);
  const sortedTodos = filteredTodos && sortByCreatedAt<TDefaultTodo>(filteredTodos);

  const selectedDateString = selectedDate && format(selectedDate, "yyyy-MM-dd");
  const selectedDateTodos = sortedTodos?.filter((todo) =>
    todo.dateArray.includes(selectedDateString),
  );

  console.log(selectedDateTodos);

  const pendingTodos = selectedDateTodos?.filter((todo) => !todo.isDone) || [];
  const completedTodos = selectedDateTodos?.filter((todo) => todo.isDone) || [];

  return (
    <div className="flex flex-wrap justify-around gap-4">
      <TodoBlock todos={pendingTodos} title="미완료 TODO" />
      <TodoBlock todos={completedTodos} title="완료 TODO" />
      {/* <ShareTodoList />
      <ShareTodoList /> */}
    </div>
  );
};

export default TodoList;
