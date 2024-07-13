import Calendar from "@/app/(scheduler)/_components/Calendar";

const CalendarSection = () => {
  return (
    <>
      <div className="w-full rounded-2xl shadow-[5px_15px_20px_5px_rgba(150,150,150,0.1)]">
        <Calendar selectedDate={new Date()} />
      </div>
    </>
  );
};

export default CalendarSection;
