import { ModalProps } from "@/types/modal.type";
import Button from "../Button";

const AlertModal = ({ type, content, onClose }: ModalProps) => {
  return (
    <div>
      <div className="text-center">{content}</div>
      <div className="flex justify-center items-center">
        <Button onClick={onClose}>확인</Button>
      </div>
    </div>
  );
};

export default AlertModal;
