"use client";

import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import Input from "../Input";
import { useEffect, useState } from "react";
import { Tables } from "@/types/supabase";
import useScheduleMutation from "@/hooks/useMutation/useScheduleMutation";
import { useModal } from "@/services/modal/modal.context";
import { TTodoForm } from "@/types/scheduler.type";
import { validateTodo } from "@/utils/\btodoValidation";

const getTodayDate = (): string => {
  return new Date().toISOString().split("T")[0];
};

const initialState: TTodoForm = {
  title: "",
  description: "",
  startDate: getTodayDate(),
  endDate: getTodayDate(),
};

const TodoInput = () => {
  const { addTodo, addDefaultTodo } = useScheduleMutation();
  const { close } = useModal();
  const [isShared, setIsShared] = useState<boolean>(false);
  const [formState, setFormState] = useState<TTodoForm>(initialState);
  const params = useParams();
  const calendarId = params.calendarId as string;
  useEffect(() => {
    setIsShared(!!calendarId);
  }, [calendarId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formState);
  };

  const handleAddTodo = async () => {
    const today = new Date().toISOString().split("T")[0];
    const startDate = !formState.startDate || !formState.endDate ? today : formState.startDate;
    const endDate = !formState.startDate || !formState.endDate ? today : formState.endDate;

    const newTodo = {
      ...(isShared && { calendarId }),
      ...formState,
      startDate,
      endDate,
    };
    const isInvalid = validateTodo(newTodo);
    if (isInvalid) {
      alert("채우세요");
      return;
    }
    close();
    isShared ? await addTodo(newTodo) : await addDefaultTodo(newTodo);
  };

  return (
    <div>
      <Input
        onChange={handleInputChange}
        value={formState.title || ""}
        name="title"
        required
        label="투두 제목"
      />
      <Input
        onChange={handleInputChange}
        value={formState.description || ""}
        name="description"
        label="투두 내용"
      />
      <Input
        onChange={handleInputChange}
        value={formState.startDate || ""}
        name="startDate"
        type="date"
        label="아이디"
      />
      <Input
        onChange={handleInputChange}
        value={formState.endDate || ""}
        name="endDate"
        type="date"
        label="아이디"
      />

      <Button onClick={handleAddTodo} size="lg" className="mt-8 mx-auto w-full">
        투두 추가하기
      </Button>
    </div>
  );
};

export default TodoInput;
