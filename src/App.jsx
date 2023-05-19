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

  /* 削除*/
  const onClickDelete = (index) => {
    const newTodos1 = [...incomplateTodos];
    newTodos1.splice(index, 1);
    setIncomplateTodos(newTodos1);
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
          {incomplateTodos.map((todo, index) => {
            return (
              <div key={todo} className="one_line">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
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
