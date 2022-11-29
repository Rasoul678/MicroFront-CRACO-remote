import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import Remote from "./Remote";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <Remote />
      </header>
    </div>
  </React.StrictMode>
);
