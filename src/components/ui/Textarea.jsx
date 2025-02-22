// src/components/ui/Textarea.jsx
import React from "react";

const Textarea = ({ id, value, onChange, placeholder }) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border p-2 rounded w-full h-32"
    />
  );
};

export default Textarea;
