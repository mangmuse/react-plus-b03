import { useModal } from "@/services/modal/modal.context";
import React from "react";

const EditMenuBox = () => {
  const modal = useModal();

  const handledeleteModal = () => {
    modal.open({
      type: "Edit",
      content: "삭제 하시겠습니까?",
    });
  };
  const handleModifyModal = () => {
    modal.open({
      type: "Modify",
      content: "",
    });
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
