const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//environment variables
require("dotenv").config();

//create express server
const app = express();
const port = 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
const todosRouter = require("./routes/todos");

app.use("/todos", todosRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
