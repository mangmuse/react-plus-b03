import { ModalProps } from "@/types/modal.type";
import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useModal } from "@/services/modal/modal.context";
import { useParams } from "next/navigation";
import useTodoQuery from "@/hooks/useQuery/useMyTodoQuery";
import useTodoStore from "@/store/useTodoStore";
import useScheduleMutation from "@/hooks/useMutation/useScheduleMutation";
import { TTodoForm } from "@/types/scheduler.type";
import { validateTodo } from "@/utils/\btodoValidation";

const initialState = {
  title: "",
  description: "",
  startDate: "",
  endDate: "",
};

const ModifyModal = ({ type, content, onClose }: ModalProps) => {
  const params = useParams();
  const calendarId = params.calendarId as string;
  const { selectedTodo } = useTodoStore();
  const { updateTodo, updateDefaultTodo } = useScheduleMutation();

  const [formState, setFormState] = useState<TTodoForm>(initialState);
  const [isShared, setIsShared] = useState<boolean>(false);

  const modal = useModal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formState);
  };

  const handleUpdateTodo = async () => {
    const updatedTodo = {
      ...(isShared && { calendarId }),
      ...formState,
      id: selectedTodo?.id,
    };
    const isInvalid = validateTodo(updatedTodo);
    if (isInvalid) {
      alert("빈칸 채우십쇼");
      return;
    }
    isShared ? await updateTodo(updatedTodo) : await updateDefaultTodo(updatedTodo);

    modal.close();
  };
  useEffect(() => {
    setIsShared(!!calendarId);
  }, [calendarId]);

  useEffect(() => {
    if (selectedTodo) {
      const { title, description, startDate, endDate } = selectedTodo;
      setFormState({ title, description, startDate, endDate });
    }
  }, [selectedTodo]);
  if (selectedTodo)
    return (
      <div className="flex flex-col w-full gap-8 text-[15px]">
        <div className="flex flex-col">
          <label htmlFor="options">일정 선택</label>
          <select id="options" className="w-[400px] border border-gray-400 rounded px-4 py-2.5">
            <option value="options" disabled>
              내 일정
            </option>
          </select>
        </div>
        <div className="flex flex-col w-[400px]">
          <h2>일정 - title</h2>
          <Input
            name="title"
            value={formState.title || ""}
            onChange={handleInputChange}
            placeholder="Value"
          />
        </div>

        <div className="flex flex-col w-[400px]">
          <h2>일정 - detail</h2>
          <Input
            name="description"
            value={formState.description || ""}
            onChange={handleInputChange}
            placeholder="Value"
          />
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col w-[200px]">
            <label htmlFor="date">시작일 선택</label>
            <Input
              name="startDate"
              value={formState.startDate || ""}
              onChange={handleInputChange}
              placeholder="Value"
              type="date"
            />
          </div>

          <div className="flex flex-col w-[200px]">
            <label htmlFor="date">종료일 선택</label>
            <Input
              name="endDate"
              value={formState.endDate || ""}
              onChange={handleInputChange}
              placeholder="Value"
              type="date"
            />
          </div>
        </div>

        <div className="flex justify-between gap-8 w-[400px]">
          <Button
            onClick={handleUpdateTodo}
            className="bg-[#000] text-[#fff] rounded-xl border-2 w-[200px]"
          >
            수정
          </Button>
          <Button onClick={onClose} className="bg-[#000] text-[#fff] rounded-xl border-2 w-[200px]">
            취소
          </Button>
        </div>
      </div>
    );
};

export default ModifyModal;
