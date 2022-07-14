/** @format */

import React from "react";
import "./Tab.css";
const Tab = ({ len, tab, setTab, clearAll }) => {
  return (
    <div className='footer'>
      <span>{len} item left</span>
      <div className='filter'>
        <div
          className={tab === 1 ? "clicked" : ""}
          onClick={() => {
            setTab(1);
          }}>
          All
        </div>
        <div
          className={tab === 2 ? "clicked" : ""}
          onClick={() => {
            setTab(2);
          }}>
          Active
        </div>
        <div
          className={tab === 3 ? "clicked" : ""}
          onClick={() => {
            setTab(3);
          }}>
          Completed
        </div>
      </div>
      <span className='clear-all' onClick={clearAll}>
        Clear completed
      </span>
    </div>
  );
};

export default Tab;
