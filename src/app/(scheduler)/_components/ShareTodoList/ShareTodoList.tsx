"use client";
import React, { useState } from "react";
import TodoItem from "../TodoItem";

export type todos = {
  user: string;
  title: string;
  content: string;
};
const ShareTodoList = () => {
  const [todo, Settodo] = useState<todos[]>([
    {
      user: "강동석",
      title: "제목",
      content: "내용",
    },
    {
      user: "강동석2",
      title: "제목3",
      content: "내용4",
    },
  ]);

  return (
    <div className="pt-14 flex flex-col w-[440px] h-full rounded-xl border-2 border-[rgb(28, 29, 34, 0.08)]">
      <span className="ml-5 pb-3 text-sm font-semibold leading-none text-zinc-900/[0.5]">
        미완료 todo
      </span>
      <div className="flex flex-col space-y-2 mt-2 ml-5 mr-5">
        {todo.map((item: todos) => (
          <TodoItem key={item.user} item={item} />
        ))}
      </div>
      <span className="py-8 ml-5 text-sm font-semibold leading-none text-zinc-900/[0.5]">
        완료 todo
      </span>
      <div className="flex flex-col space-y-2 mt-2 mr-5 ml-5">
        {todo.map((item: todos) => (
          <TodoItem
            key={item.user}
            item={item}
            classname={"bg-neutral-100/[0.25]"}
          />
        ))}
      </div>
    </div>
  );
};

export default ShareTodoList;
