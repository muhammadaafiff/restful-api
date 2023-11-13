const express = require("express");
const { register, login } = require("../controller/auth-controller");
const route = express.Router();

route.post("/login", login);
route.post("/register", register);

module.exports = route;