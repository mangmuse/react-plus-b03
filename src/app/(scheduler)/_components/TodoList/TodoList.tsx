"use client";

import TodoBlock from "../TodoBlock";
import useMyScheduleQuery, { TDefaultTodo } from "@/hooks/useQuery/useMyScheduleQuery";
import { sortByCreatedAt } from "@/utils/formatSchedules";

const TodoList = () => {
  const { todos, error, isPending } = useMyScheduleQuery();
  const sortedTodo = todos && sortByCreatedAt<TDefaultTodo>(todos);
  console.log(sortedTodo);

  const pendingTodos = sortedTodo?.filter((todo) => !todo.isDone) || [];
  const completedTodos = sortedTodo?.filter((todo) => todo.isDone) || [];

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
