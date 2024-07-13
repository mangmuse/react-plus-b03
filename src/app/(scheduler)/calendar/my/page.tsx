"use client";
import useMyScheduleQuery, { TDefaultTodo } from "@/hooks/useQuery/useMyScheduleQuery";
import Calendar from "../../_components/Calendar";
import ShareTodoList from "../../_components/ShareTodoList";
import { sortByCreatedAt } from "@/utils/formatSchedules";
import { Ttodo } from "@/hooks/useQuery/useTodoQuery";

const MyCalendarPage = () => {
  const { todos, error, isPending } = useMyScheduleQuery();
  const sortedTodos = todos && sortByCreatedAt<TDefaultTodo>(todos);
  return (
    <section className="flex bg-white gap-7 pl-6 pt-4 pb-5">
      <div className="flex flex-col gap-28">
        <span className="text-[36px] font-bold">공유 일정보기</span>
        <div className="w-[790px] h-[400px] rounded-2xl shadow-[5px_15px_20px_5px_rgba(150,150,150,0.1)]">
          <div className="border-t border-solid"></div>
          <Calendar selectedDate={new Date()} />
        </div>
      </div>
      <ShareTodoList isShared={false} todos={todos} />
    </section>
  );
};

export default MyCalendarPage;
