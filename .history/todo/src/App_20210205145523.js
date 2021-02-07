import React, { useState } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // what is this syntax? are these variables both becoming new functions?
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Jon's Todo List { inputText }</h1>
        <br/><h1>Jon's Todo List { inputText2 }</h1>
      </header>
      <Form setInputText={setInputText} setInputText2={setInputText2} />
      <TodoList />
    </div>
  );
}

export default App;
