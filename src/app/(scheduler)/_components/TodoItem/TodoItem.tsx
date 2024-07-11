"use client";
import Image from "next/image";
import React from "react";
import { todos } from "../ShareTodoList/ShareTodoList";

interface propItem {
  item: todos;
  classname?: string;
}
const TodoItem = ({ item, classname }: propItem) => {
  return (
    <div
      className={`relative p-5 rounded-xl bg-white ${
        classname ? classname : "border-zinc-900/[0.06] border-2"
      }`}
    >
      <div className="flex flex-col">
        <div className="text-xs font-medium text-zinc-900/[0.5]">
          {item.user}
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-base font-bold text-[#1c1d22]">{item.title}</div>
          <div className="text-zinc-900/[0.5] text-xs font-medium">
            {item.content}
          </div>
        </div>
        <div className="flex items-center mt-5 gap-5">
          <div>
            <div className="text-xs font-medium text-zinc-900/[0.5]">
              시작일
            </div>
            <div className="flex justify-center items-center w-24 h-7 border-2 rounded-2xl bg-red-600/[0.1] text-[#888da7] text-[0.63rem]">
              2024.07.08
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-zinc-900/[0.5]">
              마감일
            </div>
            <div className="flex justify-center items-center w-24 h-7 border-2 rounded-2xl bg-blue-700/[0.1] text-[#888da7] text-[0.63rem]">
              2024.07.09
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-3 flex space-x-2">
        <button className="text-xs font-medium">
          <Image src="/star.png" alt="즐겨찾기" width={20} height={20} />
        </button>
        <div className="h-7 w-7 flex justify-center items-center">
          <button>
            <Image src="/Ellipse.png" alt="더보기" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
