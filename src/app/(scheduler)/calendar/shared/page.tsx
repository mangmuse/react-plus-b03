"use client";

import Button from "@/components/Button";
import Page from "@/components/Page";
import useCalendarsQuery, { TCalendar } from "@/hooks/useQuery/useCalendarsQuery";
import { useModal } from "@/services/modal/modal.context";
import { sortByCreatedAt } from "@/utils/formatSchedules";
import Image from "next/image";
import Link from "next/link";

const SharedCalendarPage = () => {
  const modal = useModal();
  const { calendars, error, isPending } = useCalendarsQuery();

  const handleOpenModal = () => {
    modal.open({ type: "form", content: "이건 확인 모달" });
  };

  if (isPending) {
    return <div>Loading...</div>;
  }
  return (
    <Page title="공유 일정보기">
      <div>
        <div className="w-full flex justify-end mb-4 drop-shadow-md">
          <Button color="secondary" onClick={handleOpenModal}>
            공유 일정추가
          </Button>
        </div>

        <div className="w-full h-full grid grid-cols-3 gap-4 mt-10">
          {calendars &&
            calendars.length > 0 &&
            calendars?.map((calendar, index) => (
              <Link key={index} href={`/calendar/shared/${calendar.id}`}>
                <div
                  key={index}
                  className="flex gap-3 flex-col bg-white border-2 border-black rounded-xl p-6 drop-shadow-md"
                >
                  <div className="flex justify-end items-center mb-5">
                    <div className="relative w-4 h-4 mr-2">
                      <Image
                        src="/ic-members.png"
                        alt="members icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span>{calendar.participantCount}</span>
                  </div>
                  <h5 className="text-lg font-semibold pb-2">{calendar.name}</h5>
                  <p className="text-gray-600 text-sm mb-4">{calendar.description}</p>
                  <span>Owner: {calendar.ownerNickname.nickname}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Page>
  );
};

export default SharedCalendarPage;
