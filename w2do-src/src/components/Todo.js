import React from 'react'
import TodoList from './TodoList'

function Todo( { text, todo, todos, setTodos } ) {
    function deleteHandler() {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    function completeHandler(){
        setTodos(todos.map(item => { 
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                    // GO into the array of item we clicked,
                    //      then access the completed boolean variable,
                    //          and change it to true if clicked.      
                }
            }
            return item;
        }
        ))
    }
    return (
        <div className = "todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{ text }</li>
            <button className = "complete-btn" >
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler}className = "trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;
