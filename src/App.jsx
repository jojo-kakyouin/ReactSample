import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState([""]);
  const [incomplateTodos, setIncomplateTodos] = useState(["aaaa", "iiii"]);
  const [complateTodos, setComplateTodos] = useState(["uuu"]);

  return (
    <>
      <div className="input">
        <button>追加</button>
      </div>

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
