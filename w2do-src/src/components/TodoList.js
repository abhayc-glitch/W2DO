import React, { useState } from 'react'
import Todo from './Todo'
// This is where the "Todo" are stored.
function TodoList({ todos, setTodos }) {
    return (
        <div>
            <div className = "todo-container">
                <ul className = "todo-list">
                    {todos.map(todo => (
                        <Todo key={todo.id}
                        text={todo.text} 
                        setTodos = {setTodos} 
                        todo={todo}
                        todos={todos} /> 
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
