import { useState } from "react";
import React from "react";

// Parent component using React.memo to optimize rendering
function ReactMemoUse() {
  // State to manage the color
  const [color, setColor] = useState("red");

  return (
    <div style={{ color }}>
      {/* Input for changing the color */}
      <input value={color} onChange={(event) => setColor(event.target.value)} />

      {/* Displaying a simple paragraph */}
      <p>Hello, world!</p>

      {/* Child component wrapped with React.memo for optimization */}
      <ExpensiveTree />
    </div>
  );
}

// Child component that can be expensive to render
function ExpensiveComponent() {
  console.log("ExpensiveComponent function called");
  return <div>I'm expensive!</div>;
}

// Wrapping the expensive child component with React.memo
const ExpensiveTree = React.memo(ExpensiveComponent);

export default ReactMemoUse;
