"use client";

import { ModalProps } from "@/types/modal.type";

import Button from "../Button";
import Input from "../Input";
import { useModal } from "@/services/modal/modal.context";
import useScheduleMutation from "@/hooks/useMutation/useScheduleMutation";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import useTodoStore from "@/store/useTodoStore";

const MdShareCalendars = ({ type, content, onClose }: ModalProps) => {
  const [email, setEmail] = useState<string>("");
  const { addParticipant } = useScheduleMutation();
  const { close } = useModal();
  const calendarId = useTodoStore((state) => state.calendarId);
  const handleAddParticipant = () => {
    if (email && calendarId) {
      addParticipant({ email, calendarId });
      close();
    }
  };

  return (
    <>
      <div>
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="이메일"
        />
        <Button onClick={handleAddParticipant} size="lg" className="mt-8 mx-auto w-full">
          캘린더 공유
        </Button>
      </div>
    </>
  );
};

export default MdShareCalendars;
