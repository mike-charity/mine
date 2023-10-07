import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>weather</h1>
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href=" " target="_blank">
          charity
        </a>
        <a
          href="https://github.com/mike-charity/react-weatherapp"
          target="_blank"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
