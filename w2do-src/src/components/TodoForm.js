import React, { useState } from 'react'

{/* Basically here we are making a setState function to update our lists.
    We use setInput from App.js
    
*/}
function TodoForm({setInput, todos, setTodos, input,setStatus}) {
    function inputHandler(e){
        console.log(e.target.value)
        setInput(e.target.value)
    }
    function submitHandler(e){
        e.preventDefault()
        // Creating Object to add a Todo
        setTodos([
            ...todos,
            {text: input, completed: false, id: Math.random() * 1000}
        ])
        setInput('')
    }
    function statusHandler(e){
        setStatus(e.target.value);
         
    }
    return (
        <form>
            <input value = {input}
             onChange = {inputHandler} 
             type = "text" 
             className = "todo-input"/>
            <button onClick={ submitHandler } className = "todo-button" type = "submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div class = "select">
                <select onChange = {statusHandler} name = "What's 2 Do?" className = 'filter-todo'>
                    <option value = "all">All</option>
                    <option value = "uncompleted">Uncompleted</option>
                    <option value = "completed">Completed</option>
                </select>
            </div>
        </form>
    );
};  

export default TodoForm;

