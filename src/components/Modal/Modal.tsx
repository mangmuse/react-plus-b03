"use client";

import { ModalProps } from "@/types/modal.type";
import Image from "next/image";
import AlertModal from "./AlertModal";
import BackDrop from "./BackDrop";
import ConfirmModal from "./ConfirmModal";
import TodoInput from "./TodoInput";
import DeleteModal from "./DeleteModal";
import ModifyModal from "./ModifyModal";

const Modal = ({ type, content, onConfirm, onCancel, onClose }: ModalProps) => {
  const handleCloseModal = () => {
    if (onClose) onClose();
  };

  const renderModal = () => {
    switch (type) {
      case "todo":
        return <TodoInput />;
      case "confirm":
        return (
          <ConfirmModal
            type={type}
            content={content}
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        );
      case "alert":
        return <AlertModal type={type} content={content} onClose={onClose} />;
      case "Edit":
        return <DeleteModal type={type} content={content} onClose={onClose} />;
      case "Modify":
        return <ModifyModal type={type} content={content} onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <BackDrop>
      <div className="relative bg-white p-12 rounded min-w-[340px]">
        <button onClick={handleCloseModal} className="absolute top-2 right-2">
          <Image src="/ic-close.png" alt="close icon" width={50} height={50} />
        </button>

        <div className="px-6 py-2 text-lg">{renderModal()}</div>
      </div>
    </BackDrop>
  );
};

export default Modal;
