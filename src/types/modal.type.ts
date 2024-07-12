export interface ModalProps {
  type: "todo" | "confirm" | "alert" | "Edit" | "Modify" | "form";
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}
