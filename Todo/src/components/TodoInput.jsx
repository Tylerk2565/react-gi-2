import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  // input is our current state
  // setInput is the function we want to have change the state
  // empty use state is the inital value
  const [input, setInput] = useState('');

  // Handles the adding of todos
  const handleAddTodo = () => {
    addTodo(input); 
    setInput(''); 
  };

  return (
    <div className="mb-4 flex">
      <input
        type="text"
        placeholder="Add a new Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;