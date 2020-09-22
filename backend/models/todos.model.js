const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//mongoose creates a schema for us
const todoSchema = new Schema(
  {
    todoItem: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
