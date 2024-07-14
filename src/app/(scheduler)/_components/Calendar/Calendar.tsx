"use client";

import useDateStore from "@/store/useDateStore";
import { TDefaultTodo, TTodo } from "@/types/scheduler.type";
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
  initialDate: Date;
  todos?: TTodo[] | TDefaultTodo[];
};

const Calendar = ({ initialDate, todos }: CalendarProps) => {
  const { selectedDate, setSelectedDate } = useDateStore();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const allDatesSet = new Set<string>();
  if (todos) {
    todos.forEach((todo) => {
      todo.dateArray?.forEach((date) => allDatesSet.add(date));
    });
  }

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
        const dateString = format(day, "yyyy-MM-dd");
        const cloneDay = new Date(day);
        const isEventDay = allDatesSet.has(dateString);
        days.push(
          <div
            className={`p-5 text-center cursor-pointer relative ${
              format(currentMonth, "M") !== format(day, "M") ? "text-gray-400" : ""
            }`}
            key={day.toString()}
            onClick={() => handleDateClick(cloneDay)}
          >
            {isSameDay(day, selectedDate) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
              </div>
            )}
            <span className="relative">{formattedDate}</span>
            {isEventDay && (
              <div className="absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
            )}
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

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    console.log(format(date, "yyyy-MM-dd"));
  };

  return (
    <div className="p-4">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
