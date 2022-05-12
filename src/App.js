import React from 'react';
import './App.css';

function Todo({todo}){
  return (
    <div className='todo'>
      {todo.text}
    </div>
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className= "input" value={value} onChange={e => setValue(e.target.value)}>    
      </input>
    </form>
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
          <div className='todo-list'>
            {todos.map((todo, index) => (
              <Todo
                key = {index}
                index = {index}
                todo = {todo}
              />
            ))}
          </div>
      </header>

    </div>
  );
}

export default App;
