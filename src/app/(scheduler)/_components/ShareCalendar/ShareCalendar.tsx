import Content from "@/components/Content";
import ContentInput from "@/components/ContentInput";

import React from "react";
import CalendarSection from "@/components/CalendarSection";

const ShareCalendar = () => {
  return (
    <div className="flex flex-col w-[790px] ">
      <CalendarSection />
      <ContentInput />
      <Content />
      <Content />
    </div>
  );
};

export default ShareCalendar;
