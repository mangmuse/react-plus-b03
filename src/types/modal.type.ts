export interface ModalProps {
  type: "todo" | "confirm" | "alert" | "Edit" | "Modify" | "form" | "share";
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}
