import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./compornets/InputTodo";
import { IncomplateTodos } from "./compornets/IncomplateTodos";
import { ComplateTodos } from "./compornets/ComplateTodos";

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
      <IncomplateTodos
        incomplateTodos={incomplateTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      //■完了--------------------------------------------------------
      <ComplateTodos complateTodos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
