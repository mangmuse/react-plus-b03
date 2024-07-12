import Button from "@/components/Button";
import Page from "@/components/Page";
import { useModal } from "@/services/modal/modal.context";
import Image from "next/image";

const SharedCalendarPage = () => {
  const modal = useModal();
  const handleOpenModal = () => {
    modal.open({ type: "form", content: "이건 확인 모달" });
  };
  const sharedCalendars = [
    {
      title: "프로젝트 이름",
      detail: "우아",
      owner: "와아",
      members: 1,
    },
    {
      title: "프로젝트 이름",
      detail: "우아1",
      owner: "와아",
      members: 2,
    },
    {
      title: "프로젝트 이름",
      detail: "우아3",
      owner: "우오오",
      members: 3,
    },
    {
      title: "프로젝트 이름",
      detail: "우아4",
      owner: "우오오4",
      members: 4,
    },
    {
      title: "프로젝트 이름",
      detail: "우아5",
      owner: "우오오5",
      members: 5,
    },
    {
      title: "리액트",
      detail: "모르겠다",
      owner: "ㅎㅎ",
      members: 6,
    },
  ];

  return (
    <Page title="공유 일정보기">
      <div>
        <div className="w-full flex justify-end mb-4 drop-shadow-md">
          <Button color="secondary" onClick={handleOpenModal}>
            공유 일정추가
          </Button>
        </div>

        {
          <div className="w-full h-full grid grid-cols-3 gap-4 mt-10">
            {sharedCalendars.map((calendar, index) => (
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
                  <span>{calendar.members}</span>
                </div>
                <h5 className="text-lg font-semibold pb-2">{calendar.title}</h5>
                <p className="text-gray-600 text-sm mb-4">{calendar.detail}</p>
                <span>Owner: {calendar.owner}</span>
              </div>
            ))}
          </div>
        }
      </div>
    </Page>
  );
};

export default SharedCalendarPage;
