import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState(["aaaa", "iiii"]);
  const [complateTodos, setComplateTodos] = useState(["uuu"]);
  const changeTodoText = (event) => setTodoText(event.target.value);
  const add = (event) => {
    if (todoText === "") return;
    const newTodos = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      //■入力--------------------------------------------------------
      <div className="input">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={changeTodoText}
        />
        <button onClick={add}>追加</button>
      </div>
      //■未完了--------------------------------------------------------
      <div className="incomplate">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplateTodos.map((todo) => {
            return (
              <div key={todo} className="one_line">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      //■完了--------------------------------------------------------
      <div className="complate">
        <p className="title">未完了のTODO</p>
        <ul>
          {complateTodos.map((todo) => {
            return (
              <div key={todo} className="one_line">
                <li>{todo}</li>
                <button>戻る</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
