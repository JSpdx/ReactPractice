import React from 'react';

const Todo = ({text, setTodos}) => {
    const deletehandler = () => {

    }
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button> 
            <button onClick=(setTodosclassName="trash-btn">
                <i className="fas fa-trash"></i>
             </button> 
        </div>        
        
    );
}

export default Todo;