import Calendar from "@/app/(scheduler)/_components/Calendar";
import React from "react";
import Mainbar from "../Mainbar";

const CalendarSection = () => {
  return (
    <>
      <Mainbar title="캘린더 공유" />
      <div className="w-full h-[400px] rounded-2xl shadow-[5px_15px_20px_5px_rgba(150,150,150,0.1)]">
        <Calendar selectedDate={new Date()} />
      </div>
    </>
  );
};

export default CalendarSection;
