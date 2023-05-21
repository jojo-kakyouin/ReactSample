import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./compornets/InputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState(["aaaa", "iiii"]);
  const [complateTodos, setComplateTodos] = useState(["uuu"]);

  /*入力時の挙動*/
  const changeTodoText = (event) => setTodoText(event.target.value);

  /*追加*/
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

  /* 完了*/
  const onClickComplate = (index) => {
    const newTodos1 = [...incomplateTodos];
    newTodos1.splice(index, 1);
    const complateTodo = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newTodos1);
    setComplateTodos(complateTodo);
  };

  /*戻る*/
  const onClickBack = (index) => {
    const complateTodos1 = [...complateTodos];
    complateTodos1.splice(index, 1);
    setComplateTodos(complateTodos1);
    const compateTodo1 = [...incomplateTodos, complateTodos[index]];
    setIncomplateTodos(compateTodo1);
  };
  return (
    <>
      //■入力--------------------------------------------------------
      <InputTodo
        todoText={todoText}
        changeTodoText={changeTodoText}
        add={add}
      />
      //■未完了--------------------------------------------------------
      <div className="incomplate">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplateTodos.map((todo, index) => {
            return (
              <div key={todo} className="one_line">
                <li>{todo}</li>
                <button onClick={() => onClickComplate(index)}>完了</button>
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
          {complateTodos.map((todo, index) => {
            return (
              <div key={todo} className="one_line">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻る</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
