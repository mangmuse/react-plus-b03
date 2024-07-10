import Button from "@/components/Button/Button";
import { PropsWithChildren } from "react";
import SideBar from "./_components/SideBar/SideBar";

const SchedulerLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex flex-grow ml-64">
        <div className="relative flex flex-col h-full w-full">
          <div className="sticky top-0 flex items-center flex-row-reverse bg-white shadow-bottom w-full h-[80px] z-10">
            <Button className="mr-6">일정 추가하기</Button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SchedulerLayout;
