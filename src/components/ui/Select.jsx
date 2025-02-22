// src/components/ui/Select.jsx
import React from "react";

const Select = ({ value, onValueChange, children }) => {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="border p-2 rounded w-full"
    >
      {children}
    </select>
  );
};

export const SelectContent = ({ children }) => <>{children}</>;
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
export const SelectTrigger = ({ children }) => <>{children}</>;
export const SelectValue = ({ placeholder }) => <option disabled>{placeholder}</option>;

export default Select;
