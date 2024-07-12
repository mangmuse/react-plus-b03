"use client";

import Button from "@/components/Button";
import { useModal } from "@/services/modal/modal.context";

const OpenTodoModal = () => {
  const modal = useModal();

  const handleOpenModal = () => {
    modal.open({ type: "todo", content: "todo" });
  };

  return (
    <div className="sticky top-0 flex items-center flex-row-reverse bg-white shadow-bottom w-full h-[80px] z-10">
      <Button onClick={handleOpenModal} className="mr-6">
        일정 추가하기
      </Button>
    </div>
  );
};

export default OpenTodoModal;
