import { ModalProps } from "@/types/modal.type";
import Button from "../Button";

const ConfirmModal = ({ type, content, onConfirm, onCancel }: ModalProps) => {
  return (
    <div>
      <div className="text-center">{content}</div>
      <div className="flex w-full justify-between mt-8">
        <Button color="secondary" size="sm" onClick={onCancel}>
          취소
        </Button>
        <Button size="sm" onClick={onConfirm}>
          확인
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
