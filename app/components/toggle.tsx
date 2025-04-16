"use client";

import { useState } from "react";

export default function Toggle({
  children,
  showButton,
  hideButton,
  buttonClassName,
}: {
  children: React.ReactNode;
  showButton: React.ReactNode;
  hideButton: React.ReactNode;
  buttonClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && children}
      <button className={buttonClassName} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? hideButton : showButton}
      </button>
    </>
  );
}
