export interface ModalProps {
  type: "todo" | "confirm" | "alert";
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}
