"use client";

import Modal from "@/components/Modal/Modal";
import { ModalProps } from "@/types/modal.type";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ModalContextProps {
  open: (options: ModalProps) => void;
  close: () => void;
  isOpen: boolean;
}

const initialValue: ModalContextProps = {
  open: () => {},
  close: () => {},
  isOpen: false,
};

const ModalContext = createContext<ModalContextProps>(initialValue);

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalOptions, setModalOptions] = useState<ModalProps | null>(null);

  const value = {
    open: (option: ModalProps) => {
      setModalOptions(option);
    },

    close: () => {
      if (modalOptions?.onClose) {
        modalOptions.onClose();
      }

      setModalOptions(null);
    },
    isOpen: !!modalOptions,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal
          type={modalOptions.type}
          content={modalOptions.content}
          onConfirm={modalOptions.onConfirm}
          onCancel={modalOptions.onCancel}
          onClose={value.close}
        />
      )}
    </ModalContext.Provider>
  );
};
