import React from "react";

export const IncomplateTodos = (props) => {
  const { incomplateTodos, onClickComplate, onClickDelete } = props;
  return (
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
  );
};
