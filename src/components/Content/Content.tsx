import Image from "next/image";
import React from "react";
Image;
const Content = () => {
  return (
    <div className="mt-5 w-full h-[100px] rounded-xl border-2 border-[rgb(28, 29, 34, 0.06)]">
      <div className="flex items-center gap-7 pl-5 relative ">
        <div className="w-[40px] h-[40px] border-2 rounded-3xl mt-4"></div>
        <div className="flex flex-col mt-4">
          <span className="text-sm font-medium text-zinc-900/[0.5]">user</span>
          <button className="w-[15px] h-[15px] absolute top-3 right-4">
            <Image src="/cancel.png" alt="삭제" width={20} height={20} />
          </button>
          <button className="w-[15px] h-[15px] absolute top-3 right-10">
            <Image src="/pencil.png" alt="수정" width={20} height={20} />
          </button>
          <span className="text-base font-bold">수요일까지 뭐하면 되겠죠</span>
          <span className="text-[0.50rem] font-semibold">
            2024.07.09 AM 10:19
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
