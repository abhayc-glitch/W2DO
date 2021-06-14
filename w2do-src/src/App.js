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
    <div className="App">
      <header>
        <h1>What's To Do? </h1>
      </header>

      {/* To take in the Todo */}
      <TodoForm 
        input = {input} 
        todos={todos} 
        setTodos = {setTodos} 
        setInput = {setInput}
      />
      
      {/* To display the Todo */}
      <TodoList setTodos = {setTodos} todos={todos} />
    </div>
  );
}

export default App;
