/** @format */

import "./App.css";
import React, { useState, useEffect } from "react";
import Input from "./component/Input/Input";
import Todo from "./component/Todo/Todo";
import Tab from "./component/Tab/Tab";
function App() {
  const [down, setDown] = useState(false);
  const [listTodos, setListTodos] = useState([]);
  const [tab, setTab] = useState(1);
  const addNewTodo = (text) => {
    setListTodos([
      ...listTodos,
      { text: text, done: false },
    ]);
  };
  const handleChangeStatus = (index) => {
    let arr = [...listTodos];
    arr[index].done = listTodos[index].done ? false : true;
    setListTodos(arr);
  };
  useEffect(() => {
    console.log(listTodos);
  }, [listTodos]);
  const handleSelectAll = () => {
    setDown(!down);
    if (down) {
      setListTodos(
        listTodos.map((item) => {
          return { ...item, done: true };
        })
      );
    } else {
      setListTodos(
        listTodos.map((item) => {
          return { ...item, done: false };
        })
      );
    }
  };
  const displayTab = listTodos.filter((item) => {
    if (tab === 1) return true;
    if (tab === 2) return !item.done;
    if (tab === 3) return item.done;
  });
  const handleRemove = (index) => {
    const arr = listTodos;
    arr.splice(index, 1);
    setListTodos([...arr]);
  };
  const handleClearAll = () => {
    setListTodos(listTodos.filter((item) => !item.done));
  };
  const down_class = down ? "active-down" : "";
  return (
    <div className='App'>
      <div className='header'>
        <h1>todos</h1>
        <div className='search-bar'>
          <div
            onClick={handleSelectAll}
            className={`toogle-all ${down_class}`}></div>
          <Input
            placeholder='What needs to be done?'
            onAdd={addNewTodo}
          />
        </div>
      </div>
      {listTodos.length !== 0 && (
        <div>
          {displayTab.map((item, index) => {
            return (
              <Todo
                key={index}
                value={item}
                changeStatus={() => {
                  handleChangeStatus(index);
                }}
                removeItem={() => {
                  handleRemove(index);
                }}
              />
            );
          })}
          <Tab
            len={displayTab.length}
            tab={tab}
            setTab={setTab}
            clearAll={handleClearAll}
          />
        </div>
      )}
    </div>
  );
}

export default App;
