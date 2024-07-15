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
import useTodoStore from "@/store/useTodoStore";

type SectionProps = {
  calendarId: string;
};

const Section = ({ calendarId }: SectionProps) => {
  const { todos, error, isPending } = useTodosQuery(calendarId);
  const setSelectedDate = useDateStore((state) => state.setSelectedDate);
  const setCalendarId = useTodoStore((state) => state.setCalendarId);

  const sortedTodo = todos && sortByCreatedAt(todos);

  const modal = useModal();
  const handleShareModal = () => {
    setCalendarId(calendarId);
    modal.open({ type: "share", content: "share" });
  };

  useEffect(() => {
    setSelectedDate(new Date());
  }, [setSelectedDate]);
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
