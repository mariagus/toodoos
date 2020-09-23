const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//mongoose creates a schema for us
const todoSchema = new Schema({
  todoItem: {
    type: String,
    unique: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
