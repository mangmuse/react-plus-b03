import { ModalProvider } from "@/services/modal/modal.context";
import { PropsWithChildren } from "react";
import OpenTodoModal from "./_components/OpenTodoModal";
import SideBar from "./_components/SideBar/SideBar";
import Header from "@/components/Header";

const SchedulerLayout = ({ children }: PropsWithChildren) => {
  return (
    <ModalProvider>
      <div className="flex">
        <SideBar />

        <div className="flex flex-grow ml-64">
          <div className="relative flex flex-col h-full w-full">
            <OpenTodoModal />
            {children}
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SchedulerLayout;
