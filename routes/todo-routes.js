const express = require("express");
const { postTodo, getAllTodo, getTodoById, updateTodoById, deleteTodoById, deleteAllTodo } = require("../controller/todo-controller");
const verifyToken = require("../middleware/auth");
const route = express.Router();

route.post("/", verifyToken, postTodo);
route.get("/", verifyToken, getAllTodo);
route.get("/:id", verifyToken, getTodoById);
route.put("/:id", verifyToken, updateTodoById);
route.delete("/:id", verifyToken, deleteTodoById);
route.delete("/", verifyToken, deleteAllTodo);

module.exports = route;