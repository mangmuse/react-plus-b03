"use client";

import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import Image from "next/image";
import { useState } from "react";

type CalendarProps = {
  selectedDate: Date;
};

const Calendar = ({ selectedDate }: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="flex justify-center gap-x-6 text-xs py-6 pb-12 font-semibold">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          <Image src="/ic-arrow-left.png" alt="left arrow icon" width={6} height={6} />
        </button>
        <div>{format(currentMonth, "yyyy년 MM월")}</div>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <Image src="/ic-arrow-right.png" alt="right arrow icon" width={6} height={6} />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = ["월", "화", "수", "목", "금", "토", "일"];

    return (
      <div className="grid grid-cols-7 text-center py-4 font-semibold">
        {days.map((day) => {
          return <div key={day}>{day}</div>;
        })}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <div
            className={`p-2 text-center ${
              format(currentMonth, "M") !== format(day, "M") ? "text-gray-400" : ""
            } ${isSameDay(day, selectedDate) ? "bg-blue-200 rounded-full" : ""}`}
            key={day.toString()}
          >
            <span>{formattedDate}</span>
          </div>,
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>,
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
