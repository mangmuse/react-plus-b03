import Calendar from "@/app/(scheduler)/_components/Calendar";
import { Ttodo } from "@/hooks/useQuery/useTodoQuery";
import { TDefaultTodoRes } from "@/types/scheduler.type";

type CalendarSectionTypes = {
  todos?: TDefaultTodoRes[];
};

const CalendarSection = ({ todos }: CalendarSectionTypes) => {
  return (
    <>
      <div className="w-full rounded-2xl shadow-[5px_15px_20px_5px_rgba(150,150,150,0.1)]">
        <Calendar todos={todos} initialDate={new Date()} />
      </div>
    </>
  );
};

export default CalendarSection;
