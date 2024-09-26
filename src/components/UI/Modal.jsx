import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children, open, className='' }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
  }, []);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
