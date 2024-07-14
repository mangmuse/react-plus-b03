"use client";

import ShareCalendar from "@/app/(scheduler)/_components/ShareCalendar";
import ShareTodoList from "@/app/(scheduler)/_components/ShareTodoList";
import useScheduleMutation from "@/hooks/useMutation/useScheduleMutation";

import useTodosQuery from "@/hooks/useQuery/useTodosQuery";
import { useModal } from "@/services/modal/modal.context";
import useDateStore from "@/store/useDateStore";
import { sortByCreatedAt } from "@/utils/formatSchedules";
import Image from "next/image";
import { useEffect } from "react";
import Modal from "../Modal/Modal";

type SectionProps = {
  calendarId: string;
};

const Section = ({ calendarId }: SectionProps) => {
  const { todos, error, isPending } = useTodosQuery(calendarId);
  const setSelectedDate = useDateStore((state) => state.setSelectedDate);
  const { addParticipant } = useScheduleMutation();

  const sortedTodo = todos && sortByCreatedAt(todos);
  // const handleAddParticipant = () => {
  //   const email = "mangse@gmail.com";
  //   addParticipant({ email, calendarId });
  // };
  const modal = useModal();
  const handleShareModal = () => {
    modal.open({ type: "share", content: "share" });
  };
  const handleShareDelete = () => {
    modal.open({ type: "Edit", content: "삭제 하시겠습니까?" });
  };
  useEffect(() => {
    setSelectedDate(new Date());
  }, [setSelectedDate]);
  console.log(todos);
  if (isPending) return <div>loading</div>;
  return (
    <>
      <div className="relative">
        <div className="ml-auto w-full flex justify-end absolute top-[-60px] gap-2">
          <button
            onClick={handleShareModal}
            className="flex gap-1 border-2 p-2 font-bold bg-white border-black rounded-3xl items-center"
          >
            캘린더 공유
            <Image src="/shareicon.png" alt="공유 아이콘" width={18} height={18} />
          </button>
          <button
            onClick={handleShareDelete}
            className="flex gap-1 border-2 p-2 font-bold bg-white border-black rounded-3xl items-center"
          >
            캘린더 삭제
            <Image src="/ic-trash-cans-icon.png" alt="캘린더삭제 아이콘" width={16} height={16} />
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <ShareCalendar todos={todos} calendarId={calendarId} />
        </div>
        {todos && (
          <div className="lg:col-span-2">
            <ShareTodoList isShared={true} todos={sortedTodo} />
          </div>
        )}
      </section>
    </>
  );
};

export default Section;
