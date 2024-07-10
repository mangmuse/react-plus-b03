"use client";
import React from "react";

const TodoItem = () => {
  return (
    <>
      <div className="relative w-96 h-40 pt-4 pr-14 pb-1.5 pl-5 border-2 border-solid rounded-xl bg-[#fff] border-zinc-900/[0.06]">
        <div className="flex flex-col">
          <div>
            <div className="flex ml-1 mb-2 text-xs font-medium text-zinc-900/[0.5] m">
              user
            </div>

            <div className="flex gap-8">
              <div className="text-[#1c1d22] flex-grow-0 text-base font-bold leading-none">
                잠자기
              </div>
              <div className="text-zinc-900/[0.5] text-[14] font-medium leading-none">
                잠을 잤어요
              </div>
            </div>
          </div>
          <div className="flex gap-3 absolute bottom-4 ">
            <div>
              <div className="text-xs font-medium mt-11 mr-16 mb-2 ml-2 text-zinc-900/[0.5]">
                시작일
              </div>
              <div className="flex justify-center items-center w-24 h-7 border-solid border-2 rounded-2xl bg-red-600/[0.1] text-[#888da7] text-[0.63rem]">
                2024.07.08
              </div>
            </div>
            <div>
              <div className="text-xs font-medium mt-11 mr-16 mb-2 ml-2 text-zinc-900/[0.5]">
                마감일
              </div>
              <div className="flex justify-center items-center w-24 h-7 border-solid border-2 rounded-2xl bg-blue-700/[0.1] text-[#888da7] text-[0.63rem]">
                2024.07.09
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 absolute top-3 right-3">
          <button className="">별</button>
          <div className="h-7 w-7 border-2 rounded-full flex justify-center items-center">
            <button className="leading-6">...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
