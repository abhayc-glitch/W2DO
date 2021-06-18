import TodoForm from './components/TodoForm';
import './App.css';
import TodoList from './components/TodoList';
import React, { useState } from 'react';
import  { useEffect } from 'react';

function App() {
  const [input, setInput] = useState("")
  // This is an array because it has multiple values. 
  // Text of the todo, ID, completed/uncompleted
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  // We have to 2 pieces of state to manage all todos and filtered todos depending on 
  // ... the toggled sectional view we are in.
  const [filtered,setFiltered] = useState([]);
 
  useEffect(() => {
    getLocalItems();
  },[])

  useEffect(() => {
    filterHandler();
    localSave();
  }, [todos, status])

  function filterHandler(){
      switch(status){
        case 'completed':
          setFiltered(todos.filter((todo) => todo.completed === true))
          break;
        case 'uncompleted':
          setFiltered(todos.filter((todo) => todos.completed === false))
          break;
        default:
          setFiltered(todos)
          break;
        }
      }

  function localSave(){
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  function getLocalItems(){
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }else {
       let todolocal = JSON.parse(localStorage.getItem('todos'))
       setTodos(todolocal);
    }
  }
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
        setStatus = {setStatus}
      />
      
      {/* To display the Todo */}
      <TodoList setTodos = {setTodos} todos={todos} filtered = {filtered}  />
    </div>
  );
}

export default App;