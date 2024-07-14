"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useModal } from "@/services/modal/modal.context";
import EditMenuBox from "@/components/Modal/EditMenuBox";
import useTodoStore from "@/store/useTodoStore";
import useScheduleMutation from "@/hooks/useMutation/useScheduleMutation";
import { useParams } from "next/navigation";
import { TDefaultTodo, TTodo } from "@/types/scheduler.type";
import filledStar from "/public/icons/filledStar.svg";

export type PropItem = {
  item: TTodo | TDefaultTodo;
  classname?: string;
  isShared: boolean;
};
const isTtodo = (item: TTodo | TDefaultTodo): item is TTodo => {
  return (item as TTodo).calendarId !== undefined;
};

const TodoItem = ({ item, classname, isShared }: PropItem) => {
  const { calendarId } = useParams();
  console.log(calendarId);
  const { setSelectedTodo, selectedTodo } = useTodoStore();
  const { updateTodo, updateDefaultTodo } = useScheduleMutation();

  const [open, setOpen] = useState(false);
  const modal = useModal();

  item && console.log(item, "asdasd");
  const handleOpenModal: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (item) {
      setOpen(!open);
      setSelectedTodo(item);
    }
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = async () => {
    const updatedTodo = {
      id: item.id,
      isDone: !item.isDone,
    };
    isShared
      ? typeof calendarId === "string" && (await updateTodo({ ...updatedTodo, calendarId }))
      : await updateDefaultTodo(updatedTodo);
  };

  const handleChangeIsImportant: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation();
    const updatedTodo = {
      id: item.id,
      isImportant: !item.isImportant,
    };
    updateDefaultTodo(updatedTodo);
  };

  if (item)
    return (
      <div
        onClick={handleClick}
        className={` relative p-5 rounded-xl bg-white hover:scale-105 ${
          classname ? classname : "border-zinc-900/[0.06] border-2"
        }`}
      >
        <div className="flex flex-col">
          {isShared && isTtodo(item) && (
            <div className="text-xs font-medium text-zinc-900/[0.5]">{item.nickname}</div>
          )}
          <div className="flex gap-5 items-center">
            <div className="text-base font-bold text-[#1c1d22]">{item.title}</div>
            <div className="text-zinc-900/[0.5] text-xs font-medium">{item.description}</div>
          </div>
          <div className="flex items-center mt-5 gap-5">
            <div>
              <div className="text-xs font-medium text-zinc-900/[0.5]">시작일</div>
              <div className="flex justify-center items-center w-24 h-7 border-2 rounded-2xl bg-red-600/[0.1] text-[#888da7] text-[0.63rem]">
                {item.startDate}
              </div>
            </div>
            <div>
              <div className="text-xs font-medium text-zinc-900/[0.5]">마감일</div>
              <div className="flex justify-center items-center w-24 h-7 border-2 rounded-2xl bg-blue-700/[0.1] text-[#888da7] text-[0.63rem]">
                {item.endDate}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-3 right-3 flex space-x-2">
          {!isShared && (
            <button
              onClick={handleChangeIsImportant}
              className="hover:scale-110 text-xs font-medium"
            >
              {item.isImportant ? (
                <Image src={filledStar} alt="즐겨찾기" width={20} height={20} />
              ) : (
                <Image src="/star.png" alt="즐겨찾기" width={20} height={20} />
              )}
            </button>
          )}
          <div className="h-5 w-7 flex flex-col items-center">
            <button onClick={handleOpenModal}>
              <Image src="/Ellipse.png" alt="더보기" width={20} height={20} />
            </button>
            {open && (
              <div className="">
                <EditMenuBox />
              </div>
            )}
          </div>
        </div>
      </div>
    );
};
export default TodoItem;
