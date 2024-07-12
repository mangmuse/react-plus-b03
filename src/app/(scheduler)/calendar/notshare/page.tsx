import Mainbar from "@/components/Mainbar";
import Image from "next/image";
import React from "react";

const notSharePage = () => {
  return (
    <div className="px-10 py-10">
      <Mainbar title="공유 일정 추가" />
      <div className="flex flex-col items-center">
        <div className="px-16 py-16">
          <Image src="/Vector.png" alt="공유없음" width={100} height={100} />
        </div>
        <div className="flex flex-col items-center gap-2 font-bold">
          <span>현재 추가된 공유 일정이 없습니다.</span>
          <span>공유 일정 추가하기 버튼을 통하여 일정을 만들어주세요</span>
        </div>
      </div>
    </div>
  );
};

export default notSharePage;
