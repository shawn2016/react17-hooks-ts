/*
 * @Author: your name
 * @Date: 2021-10-28 13:37:30
 * @LastEditTime: 2021-10-28 14:08:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react17-hooks-ts/src/index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
