// src/components/ui/Input.jsx
// import React from "react";

// const Input = ({ id, value, onChange, placeholder }) => {
//   return (
//     <input
//       id={id}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className="border p-2 rounded w-full"
//     />
//   );
// };

// export default Input;

import React from 'react'

const Input = ({ id, value, onChange, placeholder }) => {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border p-2 rounded w-full"
    />
  )
}

export default Input

