"use client";

import { ModalProps } from "@/types/modal.type";

import Button from "../Button";
import Input from "../Input";

const MdShareCalendars = ({ type, content, onClose }: ModalProps) => {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <>
      <div>
        <Input required label="이메일" />

        <Button onClick={handleClick} size="lg" className="mt-8 mx-auto w-full">
          캘린더 공유
        </Button>
      </div>
    </>
  );
};

export default MdShareCalendars;
