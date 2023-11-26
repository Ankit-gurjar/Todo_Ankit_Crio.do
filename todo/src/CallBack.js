import React, { useCallback, useState } from "react";
import Todos from "./Todo"; // Importing the Todos component

const CallBackHook = () => {
  // State for the input task
  const [task, setTask] = useState("");

  // State for the count
  const [count, setCount] = useState(0);

  // State for managing the list of todos
  const [todos, setTodos] = useState([]);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Callback function to add a new todo
  const addTodo = useCallback(
    () => {
      // Updating the todos state with the new task
      setTodos((prev) => [...prev, `${task}`]);
    },
    [setTodos] // Dependency array for the callback, includes 'setTodos'
  );

  return (
    <>
      {/* Rendering the Todos component and passing the todos list and addTodo callback */}
      <Todos todos={todos} addTodo={addTodo} />

      {/* Form for entering a new task */}
      <form>
        <label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
      </form>
      <br />
      {/* Displaying the count and providing a button to increment it */}
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default React.memo(CallBackHook);
