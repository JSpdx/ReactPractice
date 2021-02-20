import React, { useState, useEffect } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  //Stated
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Use Effect
  useEffect(() => {
    console.log('hey');
    filterHandler();
  }, [todos, status] )
  //functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //Save to local
  const saveLocalTodos = () => {
    if localStorage
  }
  return (
    <div className="App">
      <header>
        <h1>Jon's Todo List</h1>
      </header>
      <Form 
        todos={todos}
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
