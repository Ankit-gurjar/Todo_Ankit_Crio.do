import React from "react";

// Functional component to display a list of todos and an "Add Todo" button
const Todos = ({ todos, addTodo }) => {
  // Logging when the Todos component is rendered
  console.log("Todo Rendered");

  return (
    <>
      {/* Heading for the todos section */}
      <h2>My Todos</h2>

      {/* Mapping through the todos array and displaying each todo */}
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}

      {/* Button to trigger the 'addTodo' callback */}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

// Memoizing the Todos component to prevent unnecessary re-renders
export default React.memo(Todos);
