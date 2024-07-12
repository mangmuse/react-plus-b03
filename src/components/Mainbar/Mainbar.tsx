import Image from "next/image";
import React from "react";
type propstype = {
  title: string;
};
const Mainbar = ({ title }: propstype) => {
  return (
    <div className="flex w-full justify-between mb-5">
      <span className="text-[36px] font-bold">공유 일정보기</span>
      <button className="border-[#000] border-solid h-[40px] border-2 px-4 rounded-3xl bg-white/[0.8] text-[14px] font-semibold">
        <div className="flex gap-1">
          {title}{" "}
          <Image src="/shareicon.png" alt="공유아이콘" width={20} height={20} />
        </div>
      </button>
    </div>
  );
};

export default Mainbar;
