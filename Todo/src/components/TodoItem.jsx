import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  // Checks if the todo is completed so it can determine if its checked so it can be styled
  const isCompleted = todo.completed;
  let textClass = "flex-grow text-gray-800"; // Default text for the todo 
  // If completed, text styling will be applied
  if (isCompleted) {
    textClass = "flex-grow line-through text-gray-400";  
  }

  return (
    <li className="flex items-center bg-slate-100 border border-gray-200 rounded-lg p-3">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleTodo(todo.id)}
        className="mr-2 h-5 w-5"
      />
      <span className={textClass}>{todo.text}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
