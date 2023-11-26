import React from "react";
import CallBackHook from "./CallBack";
import CallMemoHook from "./CallMemo";
import ReactMemoUse from "./ReactmemoUse";

function App() {
  return (
    <div className="App">
      <CallBackHook />
      <hr />
      <hr />
      <CallMemoHook />
      <ReactMemoUse />
    </div>
  );
}

export default App;
