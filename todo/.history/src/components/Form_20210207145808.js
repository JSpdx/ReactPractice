import React from 'react';


const Form = ({ inputText, setInputText, todos, setTodos }) => {
    //Here I can write javascript code and functions
    const inputTextHandler = (e) => {
      console.log(e);
      setInputText(e.target.value);
    };
    const submitTodoHandler = (event) => {
        event. preventDefault();
        setTodos([
          ...todos,
          {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    };
    return(
        <form>
        <input 
        value={inputText}
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" 
        />
        <button onClick={submitTodoHandler}className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;