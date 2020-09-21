const router = require("express").Router();
let Todo = require("../models/todos.model");

router.route("/").get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const todoItem = req.body.todoItem;
  const todoId = req.body.todoId;
  const completed = req.body.completed;

  const newTodo = new Todo({
    todoItem,
    todoId,
    completed,
  });
  newTodo
    .save()
    .then(() => res.json("Todo Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
