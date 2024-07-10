import { ModalProps } from "@/types/modal.type";
import Button from "../Button";

const ConfirmModal = ({ type, content, onConfirm, onCancel }: ModalProps) => {
  return (
    <div>
      <div className="text-center">{content}</div>
      <div className="flex w-full justify-between mt-8">
        <Button onClick={onConfirm}>확인버튼</Button>
        <Button onClick={onCancel}>취소버튼</Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
