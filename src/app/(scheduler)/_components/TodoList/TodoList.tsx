"use client";

import useTodosQuery from "@/hooks/useQuery/useTodosQuery";
import TodoBlock from "../TodoBlock";
import useMyScheduleQuery from "@/hooks/useQuery/useMyScheduleQuery";
import ShareTodoList from "../ShareTodoList";

const TodoList = () => {
  const { todos, error, isPending } = useMyScheduleQuery();
  todos && console.log(todos);
  return (
    <div className="flex flex-wrap justify-around gap-4">
      <TodoBlock todos={todos} title="미완료 TODO" />
      <TodoBlock todos={todos} title="완료 TODO" />
      {/* <ShareTodoList />
      <ShareTodoList /> */}
    </div>
  );
};

export default TodoList;
