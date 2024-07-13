"use client";

import TodoBlock from "../TodoBlock";
import useMyScheduleQuery, { TDefaultTodo } from "@/hooks/useQuery/useMyScheduleQuery";
import { sortByCreatedAt } from "@/utils/formatSchedules";

const TodoList = () => {
  const { todos, error, isPending } = useMyScheduleQuery();
  const sortedTodo = todos && sortByCreatedAt<TDefaultTodo>(todos);
  console.log(sortedTodo);
  return (
    <div className="flex flex-wrap justify-around gap-4">
      <TodoBlock todos={sortedTodo} title="미완료 TODO" />
      <TodoBlock todos={sortedTodo} title="완료 TODO" />
      {/* <ShareTodoList />
      <ShareTodoList /> */}
    </div>
  );
};

export default TodoList;
