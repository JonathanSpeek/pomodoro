import React, { useState } from "react";
import "./App.css";

function App() {
  const [startButton, setStartButton] = useState("START");

  const handleStart = () => {
    startButton === "START" ? setStartButton("PAUSE") : setStartButton("START");
  };
  return (
    <>
      <h1 className="time">25:00</h1>
      <div className="btn-group">
        <button className="btn start" onClick={() => handleStart()}>
          {startButton}
        </button>
        <button className="btn reset">RESET</button>
      </div>
    </>
  );
}

export default App;
