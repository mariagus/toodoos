import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  //const [completedTodos, setCompletedTodos] = useState([]); make new component that will map/filter the todo.completed===true.

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todoText.trim().length > 0) {
      todos.push({
        todoText,
        id: Math.random() * Date.now(),
        completed: false,
      });
    }
    setTodoText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // here we need to rerender an array with the changed states of completed.
  const handleToggle = (id) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header fade-in">
        <h1>
          T<div style={{ color: "#a8a8a8" }}>oo</div>D
          <div style={{ color: "#a8a8a8" }}>oo</div>S
        </h1>
        <div className="createTodo">
          <input
            type="text"
            value={todoText}
            className="inputTodo"
            id="inputTodo"
            onChange={(event) => {
              setTodoText(event.target.value);
            }}
          />
          <button className="addButton" onClick={addTodoHandler}>
            +
          </button>
        </div>
      </header>
      <ul className="todoList">
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              className="listItems"
              onClick={() => handleToggle(todo.id)}
              style={
                todo.completed
                  ? { textDecoration: "line-through", color: "#d9d9d9" }
                  : { textDecoration: "none" }
              }
            >
              {todo.todoText}
            </p>
            <button
              className="deleteTodo"
              onClick={() => handleDelete(todo.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
