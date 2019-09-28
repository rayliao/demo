import React from "react";
import logo from "./logo.svg";
import "./App.css";
import anime from "animejs";

function App() {
  anime({
    targets: "div",
    translateX: 250,
    rotate: "1turn",
    backgroundColor: "#FFF",
    duration: 800
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
