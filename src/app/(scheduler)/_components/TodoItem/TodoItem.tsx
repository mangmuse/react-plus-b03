"use client";
import React from "react";

const TodoItem = () => {
  return (
    <div className="relative p-5 border-2 rounded-xl bg-white border-zinc-900/[0.06]">
      <div className="flex flex-col space-y-2">
        <div className="text-xs font-medium text-zinc-900/[0.5]">user</div>
        <div className="flex justify-between items-center">
          <div className="text-base font-bold text-[#1c1d22]">잠자기</div>
          <div className="text-zinc-900/[0.5] text-xs font-medium">
            잠을 잤어요
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
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
        <button className="text-xs font-medium">별</button>
        <div className="h-7 w-7 border-2 rounded-full flex justify-center items-center">
          <button className="leading-6">...</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
