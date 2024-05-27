import { useState } from "react";

interface DialogState {
  isVisible: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useDialogState = (): DialogState => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isVisible: isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen),
  };
};
