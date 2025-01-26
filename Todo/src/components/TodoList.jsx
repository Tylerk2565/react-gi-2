import React from 'react';
import TodoItem from './TodoItem';

// Receives array of todos and functions that will either toggle or delete a todo
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map(todo => {
        return (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
          />
        );
      })}
    </ul>
  );
}

export default TodoList;