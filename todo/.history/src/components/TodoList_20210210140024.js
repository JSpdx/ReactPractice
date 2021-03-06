import React from 'react';

import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
    

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filter.map(todo => (
                   <Todo key={todo.id}
                         text={todo.text}
                         todo={todo}
                         todos={todos}
                         setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;