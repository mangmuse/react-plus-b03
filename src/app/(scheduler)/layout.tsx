import { ModalProvider } from "@/services/modal/modal.context";
import { PropsWithChildren } from "react";
import OpenTodoModal from "./_components/OpenTodoModal";
import SideBar from "./_components/SideBar";

const SchedulerLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex flex-grow ml-64">
        <div className="relative flex flex-col h-full w-full">
          <OpenTodoModal />
          {children}
        </div>
      </div>
    </div>
  );
};

export default SchedulerLayout;
