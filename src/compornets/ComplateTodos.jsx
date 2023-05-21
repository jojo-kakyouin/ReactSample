import React from "react";

export const ComplateTodos = (props) => {
  const { complateTodos, onClickBack } = props;
  return (
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
  );
};
