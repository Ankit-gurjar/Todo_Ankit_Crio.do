import { useMemo, useState } from "react";

const CallMemoHook = () => {
  // State to hold the count value
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Recursive function to calculate Fibonacci number
  const fibcal = (n) => {
    if (n < 2) return 1;
    return fibcal(n - 1) + fibcal(n - 2);
  };

  // Without useMemo: Fibonacci calculation function without memoization
  const fibfunWithoutMemo = () => {
    console.log("Fib calculation");
    return fibcal(count);
  };

  // With useMemo: Memoized version of fibcal using useMemo hook
  const fibfun = useMemo(() => {
    console.log("Fib calculation");
    return fibcal(count);
  }, [count]);

  return (
    <>
      {/* Display count and provide a button to increment it */}
      <div align="center" padding="10px" top="50%">
        Count : {count}
        <br />
        <button onClick={increment}>+</button>
        <br />
        {/* Without useMemo: Display the Fibonacci number without memoization */}
        {/* Fibonacci No (Without Memo): {fibfunWithoutMemo()} */}
        <br />
        {/* With useMemo: Display the memoized Fibonacci number */}
        Fibonacci No (With Memo): {fibfun}
        <br />
        {/* Additional examples to show the memoized value */}
        Fibonacci No (With Memo): {fibfun}
        <br />
        Fibonacci No (With Memo): {fibfun}
        <br />
        Fibonacci No (With Memo): {fibfun}
      </div>
    </>
  );
};

export default CallMemoHook;
