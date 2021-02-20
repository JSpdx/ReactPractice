import react from 'react';

import Todo from './Todo'

const TodoList = ({ todos, set }) => {
    

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                   <Todo key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;