"use client";
import ShareCalendar from "@/app/(scheduler)/_components/ShareCalendar";
import ShareTodoList from "@/app/(scheduler)/_components/ShareTodoList";
import { TDefaultTodo } from "@/hooks/useQuery/useMyScheduleQuery";
import { Ttodo } from "@/hooks/useQuery/useTodoQuery";
import useTodosQuery from "@/hooks/useQuery/useTodosQuery";
import { sortByCreatedAt } from "@/utils/formatSchedules";

type SectionProps = {
  calendarId: string;
};

const Section = ({ calendarId }: SectionProps) => {
  const { todos, error, isPending } = useTodosQuery(calendarId);
  const sortedTodo = todos && sortByCreatedAt<Ttodo>(todos);

  if (isPending) return <div>loading</div>;
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      <div className="lg:col-span-3">
        <ShareCalendar calendarId={calendarId} />
      </div>
      {todos && (
        <div className="lg:col-span-2">
          <ShareTodoList isShared={true} todos={sortedTodo} />
        </div>
      )}
    </section>
  );
};

export default Section;
