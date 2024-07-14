"use client";

import TodoBlock from "../TodoBlock";
import useMyScheduleQuery, { TDefaultTodo } from "@/hooks/useQuery/useMyScheduleQuery";
import { sortByCreatedAt } from "@/utils/formatSchedules";

const TodoList = ({ isImportantPage }: { isImportantPage?: boolean }) => {
  const { todos, error, isPending } = useMyScheduleQuery();
  const filteredTodos =
    todos && (isImportantPage ? todos.filter((todo) => todo.isImportant) : todos);
  const sortedTodos = filteredTodos && sortByCreatedAt<TDefaultTodo>(filteredTodos);

  console.log(sortedTodos);
  const pendingTodos = sortedTodos?.filter((todo) => !todo.isDone) || [];
  const completedTodos = sortedTodos?.filter((todo) => todo.isDone) || [];

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
