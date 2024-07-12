import { ModalProps } from "@/types/modal.type";
import React from "react";
import Input from "../Input";
import Button from "../Button";

const ModifyModal = ({ type, content, onClose }: ModalProps) => {
  return (
    <div className="flex flex-col w-full gap-8 text-[15px]">
      <div className="flex flex-col">
        <label htmlFor="options">일정 선택</label>
        <select
          id="options"
          className="w-[400px] border border-gray-400 rounded px-4 py-2.5"
        >
          <option value="options" disabled>
            내 일정
          </option>
          <option value="option1">내 일정</option>
          <option value="option2">내 일정</option>
          <option value="option3">내 일정</option>
        </select>
      </div>
      <div className="flex flex-col w-[400px]">
        <h2>일정 - title</h2>
        <Input placeholder="Value" />
      </div>

      <div className="flex flex-col w-[400px]">
        <h2>일정 - detail</h2>
        <Input placeholder="Value" />
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col w-[200px]">
          <label htmlFor="date">시작일 선택</label>
          <select
            id="date"
            className="border border-gray-400 rounded px-4 py-2.5 "
          >
            <option value="date" disabled>
              date
            </option>
            <option value="date">date</option>
            <option value="date">date</option>
            <option value="date">date</option>
          </select>
        </div>

        <div className="flex flex-col w-[200px]">
          <label htmlFor="date">종료일 선택</label>
          <select
            id="date"
            className="border border-gray-400 rounded px-4 py-2.5"
          >
            <option value="date" disabled>
              date
            </option>
            <option value="date">date</option>
            <option value="date">date</option>
            <option value="date">date</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between gap-8 w-[400px]">
        <Button
          onClick={onClose}
          className="bg-[#000] text-[#fff] rounded-xl border-2 w-[200px]"
        >
          수정
        </Button>
        <Button
          onClick={onClose}
          className="bg-[#000] text-[#fff] rounded-xl border-2 w-[200px]"
        >
          취소
        </Button>
      </div>
    </div>
  );
};

export default ModifyModal;
