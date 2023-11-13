const express = require("express");
const route = express.Router();
const authRoute = require("./auth-route");
const userRoute = require("./user-route");

route.get("/", (req, res) => {
  res.send("Welcome to todolist app");
});

route.use("/auth", authRoute);
route.use("/users", userRoute);

module.exports = route;