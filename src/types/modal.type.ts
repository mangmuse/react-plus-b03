export interface ModalProps {
  type: "todo" | "confirm" | "alert" | "Edit" | "Modify";
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}
