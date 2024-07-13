"use client";
import ShareCalendar from "@/app/(scheduler)/_components/ShareCalendar";
import ShareTodoList from "@/app/(scheduler)/_components/ShareTodoList";
import useTodosQuery from "@/hooks/useQuery/useTodosQuery";

type SectionProps = {
  calendarId: string;
};

const Section = ({ calendarId }: SectionProps) => {
  const { todos, error, isPending } = useTodosQuery(calendarId);
  console.log(todos);
  if (isPending) return <div>loading</div>;
  return (
    <section className="flex bg-white gap-7 pl-6 pt-4 pb-5">
      <ShareCalendar calendarId={calendarId} />
      {todos && <ShareTodoList todos={todos} />}
    </section>
  );
};

export default Section;
