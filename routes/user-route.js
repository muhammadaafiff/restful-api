const express = require("express");
const route = express.Router();

route.get("/:id", getUserById);
route.get("/:id/todos", getUserTodo);
route.post("/:id/todos", postUserTodo);
route.put("/:id/todos:id", putUserTodo);
route.delete("/:id/todos:id", deleteUserTodo);

module.exports = route;