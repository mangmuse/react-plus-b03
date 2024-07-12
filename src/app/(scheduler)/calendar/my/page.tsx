import Calendar from "../../_components/Calendar";
import ShareTodoList from "../../_components/ShareTodoList";

const MyCalendarPage = () => {
  return (
    <section className="flex bg-white gap-7 pl-6 pt-4 pb-5">
      <div className="flex flex-col gap-28">
        <span className="text-[36px] font-bold">공유 일정보기</span>
        <div className="w-[790px] h-[400px] rounded-2xl shadow-[5px_15px_20px_5px_rgba(150,150,150,0.1)]">
          <div className="border-t border-solid"></div>
          <Calendar selectedDate={new Date()} />
        </div>
      </div>
      <ShareTodoList />
    </section>
  );
};

export default MyCalendarPage;
