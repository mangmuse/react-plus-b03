import React from "react";
import Button from "../Button";
import { ModalProps } from "@/types/modal.type";
import { useModal } from "@/services/modal/modal.context";
import useTodoStore from "@/store/useTodoStore";
import useScheduleMutation from "@/hooks/useMutation/useScheduleMutation";

const DeleteModal = ({ type, content, onClose }: ModalProps) => {
  const { deleteTodo, deleteDefaultTodo } = useScheduleMutation();
  const selectedTodo = useTodoStore((state) => state.selectedTodo);
  const modal = useModal();

  const handleDeleteTodo = async () => {
    modal.close();

    if (!!selectedTodo) {
      selectedTodo.calendarId
        ? await deleteTodo(selectedTodo.id)
        : await deleteDefaultTodo(selectedTodo.id);
    } else {
    }
  };
  return (
    <div className="w-80 h-40 pt-9 px-14 pb-9 bg-[#fff] flex flex-col justify-center items-center">
      <div className="text-center text-xl font-bold">{content}</div>
      <div className="flex w-full mt-8 justify-center gap-2">
        <Button className="rounded-2xl bg-[#1c1d22] " onClick={handleDeleteTodo}>
          확인
        </Button>
        <Button
          className=" rounded-2xl border-2 border-solid bg-[#fff] text-[#000]"
          onClick={onClose}
        >
          취소
        </Button>
      </div>
    </div>
  );
};

export default DeleteModal;
