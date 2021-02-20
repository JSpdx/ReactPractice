import React, { useState } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // what is this syntax? are these variables both becoming new functions?
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
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
        status={status}
        setStatus={set}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
