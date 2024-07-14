"use client";

import TodoItem from "../TodoItem";
import useDateStore from "@/store/useDateStore";
import { format } from "date-fns/format";
import { TDefaultTodo, TTodo } from "@/types/scheduler.type";

export type PropItem = {
  todos?: TTodo[] | TDefaultTodo[];
  classname?: string;
  isShared: boolean;
};

const ShareTodoList = ({ todos, isShared }: PropItem) => {
  const selectedDate = useDateStore((state) => state.selectedDate);

  const selectedDateString = selectedDate && format(selectedDate, "yyyy-MM-dd");
  const selectedDateTodos = todos?.filter((todo) => todo.dateArray?.includes(selectedDateString));

  const pendingTodos = selectedDateTodos?.filter((todo) => !todo.isDone) || [];
  const completedTodos = selectedDateTodos?.filter((todo) => todo.isDone) || [];

  return (
    <div className="pt-14 flex flex-col w-full h-full rounded-xl border-dashed border-2 border-[rgb(28, 29, 34, 0.08)]">
      <span className="ml-5 pb-3 text-sm font-semibold leading-none text-zinc-900/[0.5]">
        미완료 todo
      </span>
      <div className="flex flex-col space-y-2 mt-2 ml-5 mr-5">
        {pendingTodos &&
          pendingTodos.map((item) => <TodoItem key={item.id} item={item} isShared={isShared} />)}
      </div>
      <span className="py-8 ml-5 text-sm font-semibold leading-none text-zinc-900/[0.5]">
        완료 todo
      </span>
      <div className="flex flex-col space-y-2 mt-2 mr-5 ml-5">
        {completedTodos &&
          completedTodos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              isShared={isShared}
              classname={"bg-neutral-100/[0.25]"}
            />
          ))}
      </div>
    </div>
  );
};

export default ShareTodoList;
