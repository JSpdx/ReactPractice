import react from 'react';

import Todo from './Todo'

const TodoList = ({ todos }) => {
    

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                   <div className="todo">
                   <li className="todo-item">{todo.text}</li>
                   <button className="complete-btn">
                       <i className="fas fa-check"></i>
                   </button> 
                   <button className="trash-btn">
                       <i className="fas fa-trash"></i>
                    </button> 
               </div> 
                ))}
            </ul>
        </div>
    );
};

export default TodoList;