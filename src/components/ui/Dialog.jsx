// src/components/ui/Dialog.jsx
import React from "react";

const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg">
        {children}
        <button className="mt-4 bg-red-500 text-white p-2 rounded" onClick={() => onOpenChange(false)}>Close</button>
      </div>
    </div>
  );
};

export const DialogTrigger = ({ children, setIsOpen }) => {
  return <button onClick={() => setIsOpen(true)}>{children}</button>;
};

export const DialogContent = ({ children }) => <div>{children}</div>;
export const DialogHeader = ({ children }) => <div className="text-lg font-bold">{children}</div>;
export const DialogTitle = ({ children }) => <h2 className="text-xl">{children}</h2>;
export const DialogDescription = ({ children }) => <p className="text-gray-500">{children}</p>;
export const DialogFooter = ({ children }) => <div className="mt-4 flex justify-end">{children}</div>;

export default Dialog;
