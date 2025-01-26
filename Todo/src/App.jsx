import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {
  // todos state and our setTodos function, state starts off at [] (blank/no value)
  const [todos, setTodos] = useState([]);

  // Adds todo, doesn't add if the text is empty or has spaces
  const addTodo = (text) => {
    if (text.trim() === '') return;

    // creates new todo object, todos have a default completed state, data.now gives each todo a unique id 
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    // Adds todos to the state by spreading(...) and then adds the new todo
    setTodos([...todos, newTodo]);
  };

  // Toggles todo completion status 
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }; // If the todo exists, completed status is toggled 
      }
      // If the id doesnt match, returns the todo to unchanged
      return todo;
    }));
  };

  // Deletes todo based on its id
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-400">
      <div className="bg-white shadow-lg rounded-lg p-16">
        <h1 className="text-4xl font-bold text-center text-black mb-6">Tyler's To-Do List</h1>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;