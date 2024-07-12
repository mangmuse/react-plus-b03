import React from "react";
import ShareTodoList from "@/app/(scheduler)/_components/ShareTodoList";
import ShareCalendar from "@/app/(scheduler)/_components/ShareCalendar";

const Section = () => {
  return (
    <section className="flex bg-white gap-7 pl-6 pt-4 pb-5">
      <ShareCalendar />
      <ShareTodoList />
    </section>
  );
};

export default Section;
