import axios from "axios";

const API_URL = "http://localhost:5000/todos/";

async function addTodoHandler(todoItem) {
  const { data: newTodo } = await axios.post(`${API_URL}/add`, {
    todoItem,
  });
  return newTodo;
}
async function handleDelete(id) {
  const message = await axios.delete(`${API_URL}${id}`);
  return message;
}
async function handleToggle(id, payload) {
  const { data: todo } = await axios.put(`${API_URL}${id}`, payload);
  return todo;
}

async function getAllTodos() {
  const { data: todos } = await axios.get(API_URL);
  return todos;
}

export default { addTodoHandler, handleDelete, handleToggle, getAllTodos };
