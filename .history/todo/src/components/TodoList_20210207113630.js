import react from 'react';

import Todo from './Todo'

const TodoList = ({ todos }) => {
    

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo )}
            </ul>
        </div>
    );
};

export default TodoList;