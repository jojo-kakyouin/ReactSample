import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div className="incomplate">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="one_line">
            <li>aaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      <div className="complate">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="one_line">
            <li>aaaa</li>
            <button>戻る</button>
          </div>
        </ul>
      </div>
    </>
  );
};
