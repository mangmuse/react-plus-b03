export interface ModalProps {
  type: "todo" | "confirm" | "alert" | "Edit" | "Modify" | "form" | "share" | "string";
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}
