"use client";

import Button from "@/components/Button";
import Page from "@/components/Page";
import useCalendarMutation from "@/hooks/useMutation/useCalendarMutation";
import Image from "next/image";

const SharedCalendarOverviewPage = () => {
  const { createCalendar } = useCalendarMutation();
  const handleClick = async () => {
    const newCalendar = { name: "이거는 제목", description: "asd" };
    createCalendar(newCalendar);
  };

  return (
    <Page title="공유 일정보기">
      <div>
        <div className="w-full flex justify-end mb-4">
          <Button onClick={handleClick} color="secondary">
            공유 일정추가
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col border-2 border-black rounded-md p-6">
            <div className="flex justify-end items-center mb-4">
              <div className="relative w-4 h-4 mr-2">
                <Image
                  src="/ic-members.png"
                  alt="members icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span>5</span>
            </div>
            <h5 className="text-lg font-semibold pb-2">프로젝트 이름</h5>
            <p className="text-gray-600 text-sm mb-4">
              캘린더 디테일입니다 03조 팀플할라고 만들었어여
            </p>
            <span>Owner: nickname</span>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default SharedCalendarOverviewPage;
