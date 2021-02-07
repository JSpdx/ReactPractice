import React from 'react';


const Form = ({ setInputText, setInputText2, text }) => {
    //Here I can write javascript code and functions
    const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
      setInputText2(e.target.value);
      
    };
    return(
        <form>
        <input onChange={inputTextHandler} type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <h1>{ text }</h1>
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