"use client";
import React, { useState } from "react";
import TodoItem from "../TodoItem";
import { Tables } from "@/types/supabase";

export type todo = Partial<Tables<"todos">>;

type shareTodoListProps = {
  todos?: todo[];
  isShared: boolean;
};
const ShareTodoList = ({ todos, isShared }: shareTodoListProps) => {
  console.log(todos);
  // const [todo, Settodo] = useState<todos[]>([
  //   {
  //     user: "강동석",
  //     title: "제목",
  //     content: "내용",
  //   },
  //   {
  //     user: "강동석2",
  //     title: "제목3",
  //     content: "내용4",
  //   },
  // ]);

  return (
    <div className="pt-14 flex flex-col w-[440px] h-full rounded-xl border-dashed border-2 border-[rgb(28, 29, 34, 0.08)]">
      <span className="ml-5 pb-3 text-sm font-semibold leading-none text-zinc-900/[0.5]">
        미완료 todo
      </span>
      <div className="flex flex-col space-y-2 mt-2 ml-5 mr-5">
        {todos &&
          todos.map((item: todo) => <TodoItem key={item.id} item={item} isShared={isShared} />)}
      </div>
      <span className="py-8 ml-5 text-sm font-semibold leading-none text-zinc-900/[0.5]">
        완료 todo
      </span>
      <div className="flex flex-col space-y-2 mt-2 mr-5 ml-5">
        {todos &&
          todos.map((item: todo) => (
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
