"use client";

import { addDays, subDays } from "date-fns";
import { useState } from "react";
import DateSelector from "../DateSelector";
import useDateStore from "@/store/useDateStore";

const TodoDate = () => {
  const { selectedDate, setSelectedDate } = useDateStore();
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevDay = () => {
    setSelectedDate((prevDate) => subDays(prevDate, 1));
  };

  const handleNextDay = () => {
    setSelectedDate((prevDate) => addDays(prevDate, 1));
  };

  return (
    <div>
      <DateSelector selectedDate={selectedDate} onPrev={handlePrevDay} onNext={handleNextDay} />
    </div>
  );
};

export default TodoDate;
