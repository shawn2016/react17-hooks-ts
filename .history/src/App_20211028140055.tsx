/*
 * @Author: your name
 * @Date: 2021-10-28 13:37:30
 * @LastEditTime: 2021-10-28 14:00:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react17-hooks-ts/src/App.tsx
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
