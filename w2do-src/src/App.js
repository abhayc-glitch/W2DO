import TodoForm from './components/TodoForm';
import './App.css';
import TodoList from './components/TodoList';
import React, { useState } from 'react';


function App() {
  const [input, setInput] = useState("")
  // This is an array because it has multiple values. 
  // Text of the todo, ID, completed/uncompleted
  const [todos, setTodos] = useState([])
  return (
    <div className="todo-app">
      <header>
        <h1>What's To Do? </h1>
      </header>
      {/* To take in the Todo */}
      < TodoForm input = {input} todos={todos} setInput = {setInput} />
      {/* To display the Todo */}
      <TodoList />
    </div>
  );
}

export default App;
