import React, { useState } from "react";
import ContentInput from "../ContentInput";
import Content from "../Content";
import ShareTodoList from "@/app/(scheduler)/_components/ShareTodoList";

const Section = () => {
  return (
    <section className="flex bg-white border-2 gap-7 pl-6 pt-4 pb-5">
      <div className="flex flex-col w-[790px]">
        <div className="w-full h-[500px] border-2 rounded-2xl shadow-[5px_15px_20px_5px_rgba(150,150,150,0.1)]"></div>
        <ContentInput />
        <Content />
        <Content />
      </div>
      <ShareTodoList />
    </section>
  );
};

export default Section;
