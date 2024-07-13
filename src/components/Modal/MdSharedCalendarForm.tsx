"use client";
import useScheduleMutation from "@/hooks/useMutation/useScheduleMutation";
import Button from "../Button";
import Input from "../Input";
import { ChangeEventHandler, useRef, useState } from "react";
import { useModal } from "@/services/modal/modal.context";

const MdSharedCalendarForm = () => {
  const { close } = useModal();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { createCalendar } = useScheduleMutation();

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDescription(e.target.value);
  };

  const handleClick = async () => {
    if (name.trim() === "" || description.trim() === "") {
      return;
    }
    const newCalendar = { name, description };
    createCalendar(newCalendar);
    close();
  };
  return (
    <div>
      <Input onChange={handleNameChange} required label="공유 일정 이름" />
      <Input onChange={handleDescriptionChange} label="공유 일정 상세" />

      <Button onClick={handleClick} size="lg" className="mt-8 mx-auto w-full">
        공유 캘린더 추가
      </Button>
    </div>
  );
};

export default MdSharedCalendarForm;
