import Content from "@/components/Content";
import ContentInput from "@/components/ContentInput";

import Image from "next/image";
import React from "react";
import Calendar from "../Calendar";

const ShareCalendar = () => {
  return (
    <div className="flex flex-col w-[790px] ">
      <div className="flex w-full justify-between mb-5">
        <span className="text-[36px] font-bold">공유 일정보기</span>
        <button className="border-[#000] border-solid h-[40px] border-2 px-4 rounded-3xl bg-white/[0.8] text-[14px] font-semibold">
          <div className="flex gap-1">
            캘린더 공유{" "}
            <Image
              src="/shareicon.png"
              alt="공유아이콘"
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>
      <div className="w-full h-[400px] rounded-2xl shadow-[5px_15px_20px_5px_rgba(150,150,150,0.1)]">
        <Calendar selectedDate={new Date()} />
      </div>
      <div className="flex ml-1 mt-3 gap-2">
        <Image src="/comment-icon.png" alt="말풍선" width={25} height={25} />
        <span className="h-[20px] leading-6 text-zinc-900/[0.5] text-xs font-semibold leading-none">
          댓글
        </span>
        <div className="mt-1 w-[20px] h-[20px] leading-4 rounded-md bg-black/[0.5] text-center">
          <span className="text-[#fff] text-xs font-bold">2</span>
        </div>
      </div>
      <ContentInput />
      <Content />
      <Content />
    </div>
  );
};

export default ShareCalendar;
