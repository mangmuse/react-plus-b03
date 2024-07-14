"use client";
import ShareCalendar from "@/app/(scheduler)/_components/ShareCalendar";
import ShareTodoList from "@/app/(scheduler)/_components/ShareTodoList";
import useScheduleMutation from "@/hooks/useMutation/useScheduleMutation";
import { Ttodo } from "@/hooks/useQuery/useTodoQuery";
import useTodosQuery from "@/hooks/useQuery/useTodosQuery";
import useDateStore from "@/store/useDateStore";
import { sortByCreatedAt } from "@/utils/formatSchedules";
import { useEffect } from "react";

type SectionProps = {
  calendarId: string;
};

const Section = ({ calendarId }: SectionProps) => {
  const { todos, error, isPending } = useTodosQuery(calendarId);
  const setSelectedDate = useDateStore((state) => state.setSelectedDate);
  const { addParticipant } = useScheduleMutation();
  const sortedTodo = todos && sortByCreatedAt(todos);
  const handleAddParticipant = () => {
    const email = "mangse@gmail.com";
    addParticipant({ email, calendarId });
  };

  useEffect(() => {
    setSelectedDate(new Date());
  }, [setSelectedDate]);
  console.log(todos);
  if (isPending) return <div>loading</div>;
  return (
    <>
      <button onClick={handleAddParticipant}>공유버튼 어디갔어</button>
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
