"use client";
import Page from "@/components/Page";
import useMyScheduleQuery, { TDefaultTodo } from "@/hooks/useQuery/useMyScheduleQuery";
import Calendar from "../../_components/Calendar";
import ShareTodoList from "../../_components/ShareTodoList";
import { sortByCreatedAt } from "@/utils/formatSchedules";

const MyCalendarPage = () => {
  const { todos, error, isPending } = useMyScheduleQuery();
  const sortedTodos = todos && sortByCreatedAt<TDefaultTodo>(todos);
  return (
    <Page title="내 일정보기">
      <section className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <div className="w-full rounded-2xl shadow-[5px_15px_20px_5px_rgba(150,150,150,0.1)]">
            <div className="border-t border-solid"></div>
            <Calendar todos={sortedTodos} initialDate={new Date()} />
          </div>
        </div>
        <div className="lg:col-span-2">
          <ShareTodoList isShared={false} todos={todos} />
        </div>
      </section>
    </Page>
  );
};

export default MyCalendarPage;
