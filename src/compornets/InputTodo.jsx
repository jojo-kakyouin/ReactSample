import React from "react";

export const InputTodo = (props) => {
  const { todoText, changeTodoText, add } = props;

  return (
    <div className="input">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={changeTodoText}
      />
      <button onClick={add}>追加</button>
    </div>
  );
};
