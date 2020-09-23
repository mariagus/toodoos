const router = require("express").Router();
let Todo = require("../models/todos.model");

router.route("/").get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const todoItem = req.body.todoItem;
  const completed = req.body.completed;

  const newTodo = new Todo({
    todoItem,
    completed,
  });
  newTodo
    .save()
    .then(() => res.json(newTodo))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").put((req, res) => {
  Todo.findByIdAndUpdate(req.params.id)
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json("Todo deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
