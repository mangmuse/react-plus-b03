import TodoItem from "@/app/(scheduler)/_components/TodoItem";
import React from "react";

const Section = () => {
  return (
    <section className="flex w-full h-full bg-white border-2 gap-7 pl-6 pt-4 pb-5">
      <div className="flex flex-col w-[790px]">
        <div className="w-full h-[500px] border-2 rounded-2xl shadow-[5px_15px_20px_5px_rgba(150,150,150,0.1)]"></div>
        <div className="flex items-center relative mt-10 w-full h-[100px] rounded-xl border-2 border-[rgb(28, 29, 34, 0.06)]">
          <input
            type="text"
            placeholder="댓글을 남겨보세요"
            className="w-full h-full pl-4 pr-14 rounded-xl focus:outline-none"
          />
          <button className="text-[0.63rem] w-[50px] h-[21px] absolute bottom-2 right-2 rounded-3xl border-2 border-[rgba(28, 29, 34, 0.06)]">
            등록
          </button>
        </div>
        <div className="mt-5 w-full h-[100px] rounded-xl border-2 border-[rgb(28, 29, 34, 0.06)]">
          <div className="flex items-center gap-7 pl-5 relative">
            <div className="w-[40px] h-[40px] border-2 rounded-3xl"></div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-900/[0.5]">
                user
              </span>
              <div className="w-[15px] h-[15px] absolute top-1 right-2">x</div>
              <div className="w-[15px] h-[15px] absolute top-1 right-8">o</div>
              <span className="text-base font-bold">
                수요일까지 뭐하면 되겠죠
              </span>
              <span className="text-[0.50rem] font-semibold">
                2024.07.09 AM 10:19
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full h-[100px] rounded-xl border-2 border-[rgb(28, 29, 34, 0.06)]">
          <div className="flex items-center gap-7 pl-5 relative">
            <div className="w-[40px] h-[40px] border-2 rounded-3xl"></div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-900/[0.5]">
                user
              </span>
              <div className="w-[15px] h-[15px] absolute top-1 right-2">x</div>
              <div className="w-[15px] h-[15px] absolute top-1 right-8">o</div>
              <span className="text-base font-bold">
                수요일까지 뭐하면 되겠죠
              </span>
              <span className="text-[0.50rem] font-semibold">
                2024.07.09 AM 10:19
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[440px] h-full rounded-xl border-2 border-[rgb(28, 29, 34, 0.08)]">
        <span className="ml-5 text-sm font-semibold leading-none text-zinc-900/[0.5]">
          미완료 todo
        </span>
        <div className="flex flex-col space-y-2 mt-2 ml-5 mr-5">
          <TodoItem />
          <TodoItem />
        </div>
        <span className="ml-5 mt-5 text-sm font-semibold leading-none text-zinc-900/[0.5]">
          완료 todo
        </span>
        <div className="flex flex-col space-y-2 mt-2 mr-5 ml-5">
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </section>
  );
};

export default Section;
