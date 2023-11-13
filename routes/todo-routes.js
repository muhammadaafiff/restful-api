const express = require("express");
const { getAllTodo, getTodoById, updateTodoById, deleteTodoById, deleteAllTodo, createTodo } = require("../controller/todo-controller");
const verifyToken = require("../middleware/auth");
const route = express.Router();

route.post("/", verifyToken, createTodo);
route.get("/", verifyToken, getAllTodo);
route.get("/:id", verifyToken, getTodoById);
route.put("/:id", verifyToken, updateTodoById);
route.delete("/:id", verifyToken, deleteTodoById);
route.delete("/", verifyToken, deleteAllTodo);

module.exports = route;