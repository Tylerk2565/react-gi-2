import React, { useState } from "react";

const Counter = () => {
  // count is our starting state, setcount is the function to change that, our starting state is 0
  // Onclicks increase or decrease our count
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>
      <h2 className="text-xl mb-4">{count}</h2>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
