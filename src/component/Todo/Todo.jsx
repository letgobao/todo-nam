/** @format */

import React, { useState } from "react";
import CheckIcon from "../../img/check.svg";
import CloseIcon from "../../img/close.svg";
import "./Todo.css";
const Todo = ({ value, changeStatus, removeItem }) => {
  const contentStyle = {
    textDecoration: value.done ? "line-through" : "none",
    color: value.done ? "#AAAAAA" : "#000000",
  };
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className='todo-item'
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}>
      {isHover && (
        <div className='close-box' onClick={removeItem}>
          <img src={CloseIcon} alt='' />
        </div>
      )}
      <div className='check' onClick={changeStatus}>
        <div className={value.done ? "checked" : ""}></div>
      </div>
      <div className='content' style={contentStyle}>
        {value.text}
      </div>
    </div>
  );
};

export default Todo;
