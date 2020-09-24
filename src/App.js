import React, { useState, useEffect } from "react";
import "./App.css";
import APIHelper from "./APIHelper.js";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodoAndSetTodos = async () => {
      const todos = await APIHelper.getAllTodos();
      setTodos(todos);
    };
    fetchTodoAndSetTodos();
  }, []);

  const addTodoHandler = async (e) => {
    e.preventDefault();

    const newTodo = await APIHelper.addTodoHandler(todoText);
    setTodos([...todos, newTodo]);
    setTodoText("");
  };

  const handleToggle = async (e, id) => {
    e.stopPropagation();
    const payload = {
      completed: !todos.find((todo) => todo._id === id).completed,
    };
    const updatedTodo = await APIHelper.handleToggle(id, payload);
    let updated = todos.map((todo) => (todo._id === id ? updatedTodo : todo));

    setTodos(updated);
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    await APIHelper.handleDelete(id);
    setTodos(todos.filter(({ _id: i }) => id !== i));
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
          <button type="button" className="addButton" onClick={addTodoHandler}>
            +
          </button>
        </div>
      </header>
      <ul className="todoList">
        {todos.map((todo, i) => (
          <li key={i}>
            <p
              className="listItems"
              onClick={(e) => handleToggle(e, todo._id)}
              style={
                todo.completed
                  ? { textDecoration: "line-through", color: "#d9d9d9" }
                  : { textDecoration: "none" }
              }
            >
              {todo.todoItem}
            </p>
            <button
              className="deleteTodo"
              onClick={(e) => handleDelete(e, todo._id)}
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
