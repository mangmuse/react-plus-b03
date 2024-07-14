"use client";
import useDateStore from "@/store/useDateStore";
import { PropsWithChildren, useEffect } from "react";

const CalendarLayout = ({ children }: PropsWithChildren) => {
  const setSelectedDate = useDateStore((state) => state.setSelectedDate);
  useEffect(() => {
    setSelectedDate(new Date());
  }, [setSelectedDate]);
  return <>{children}</>;
};

export default CalendarLayout;
