import React from "react";
import useCounter  from "../Hooks/useCounter";

const DemoHooks = () => {
    const { count, increment, decrement, reset, expensiveCalculation, previousCount } = useCounter();
    return (
        <div>
            <h3>Counter</h3>
            <p>Counter current: {count}</p>
            <p>Counter previous: {previousCount}</p>
            <p>Expensive calculation: {expensiveCalculation}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default DemoHooks;