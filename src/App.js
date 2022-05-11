import React from 'react';
import './App.css';

function Todo({todo}){
  return (
    <div className='todo'>
      {todo.text}
    </div>
  )
}

function App() {

  const[todos, setTodos] = React.useState([
    {text: "Learn react"},
    {text: "Improve english"},
    {text: "Meet friends"}
  ]);

  return (
    <div className="app">
      <header>
          <h1>Andrea's ToDo List</h1>
      </header>
    </div>
  );
}

export default App;
