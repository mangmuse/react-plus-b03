import { PropsWithChildren } from "react";
import SideBar from "./_components/SideBar/SideBar";
import Header from "@/components/Header";

const SchedulerLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex flex-grow">
        <div className="h-full w-full flex flex-col bg-slate-300">
          <Header title="내 공유 일정보기"></Header>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SchedulerLayout;
