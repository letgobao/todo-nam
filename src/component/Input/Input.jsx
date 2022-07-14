/** @format */

import React, { useState } from "react";
import "./Input.css";
const Input = ({ placeholder, onAdd }) => {
  const [text, setText] = useState("");
  const changeText = (e) => setText(e.target.value);
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      onAdd(text);
      setText("");
    }
  };
  return (
    <input
      value={text}
      type='text'
      placeholder={placeholder}
      onChange={changeText}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
