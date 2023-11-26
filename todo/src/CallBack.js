import { useCallback, useState } from "react";
import Todos from "./Todo";

const CallBackHook = () => {
  const [task, setTask] = useState("");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };
  const addTodo = useCallback(
    () => {
      setTodos((prev) => [...prev, `${task}`]);
    },
    [task],
    [todos]
  );

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <form>
        <label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
      </form>
      <hr />
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default CallBackHook;
