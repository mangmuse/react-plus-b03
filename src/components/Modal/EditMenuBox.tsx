import { useModal } from "@/services/modal/modal.context";
import React from "react";

interface openProps {
  setOpen: (open: boolean) => void;
  open: boolean;
  EditBoxRef?: HTMLDivElement;
}

const EditMenuBox = ({ setOpen, open }: openProps) => {
  const modal = useModal();

  const handledeleteModal: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    modal.open({
      type: "Edit",
      content: "삭제 하시겠습니까?",
    });
    setOpen(!open);
  };
  const handleModifyModal: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    modal.open({
      type: "Modify",
      content: "",
    });
    setOpen(!open);
  };

  return (
    <div className="flex flex-col px-1 py-1  border-2">
      <button onClick={handleModifyModal} className="border-b-2 text-xs font-bold w-[30px]">
        수정
      </button>
      <button onClick={handledeleteModal} className="text-xs font-bold ">
        삭제
      </button>
    </div>
  );
};

export default EditMenuBox;
