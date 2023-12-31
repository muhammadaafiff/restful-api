const { Op } = require("sequelize");
const { Todo } = require("../models");

module.exports = {
  createTodo: async (req, res) => {
    const data = req.body;
    try {
      await Todo.create(data);

      res.status(201).json({
        status: true,
        code: 201,
        message: "Success create todo",
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        code: 400,
        message: "Invalid request",
      });
    }
  },

  getAllTodo: async (req, res) => {
    const user = req.user;

    try {
      const todos = await Todo.findAll({
        where: {
          userId: user.id,
        },
      });

      res.status(200).json({
        status: true,
        code: 200,
        message: "Success get all todo",
        data: todos,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        code: 500,
        message: "Internal server error",
      });
    }
  },

  getTodoById: async (req, res) => {
    const user = req.user;
    const todoId = req.params.id;

    try {
      const todo = await Todo.findOne({
        where: {
          [Op.and]: [{ userId: user.id }, { id: todoId }],
        },
      });

      if (!todo) throw new Error("Data not found");

      res.status(200).json({
        status: true,
        code: 200,
        message: `Success get todo id: ${todoId}`,
        data: todo,
      });
    } catch (err) {
      res.status(404).json({
        status: false,
        code: 404,
        message: err.message,
      });
    }
  },

  updateTodoById: async (req, res) => {
    const user = req.user;
    const todoId = req.params.id;
    const { value } = req.body;

    try {
      const todo = await Todo.findOne({
        where: {
          [Op.and]: [{ userId: user.id }, { id: todoId }],
        },
      });

      if (!todo) throw new Error("Data not found");
      if (value === undefined) throw new Error("Invalid request");

      const { dataValues } = todo;
      await Todo.update(
        { ...dataValues, ["value"]: value },
        {
          where: {
            id: todoId,
          },
        }
      );

      res.status(200).json({
        status: true,
        code: 200,
        message: `Success update todo id: ${todoId}`,
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        code: 400,
        message: err.message,
      });
    }
  },

  deleteTodoById: async (req, res) => {
    const user = req.user;
    const todoId = req.params.id;

    try {
      const todos = await Todo.destroy({
        where: {
          [Op.and]: [{ userId: user.id }, { id: todoId }],
        },
      });

      if (!todos) throw new Error("Data not found");

      res.status(200).json({
        status: true,
        code: 200,
        message: `Success delete todo id: ${todoId}`,
      });
    } catch (err) {
      res.status(404).json({
        status: false,
        code: 404,
        message: err.message,
      });
    }
  },

  deleteAllTodo: async (req, res) => {
    const user = req.user;

    try {
      await Todo.destroy({
        where: {
          userId: user.id,
        },
      });

      res.status(200).json({
        status: true,
        code: 200,
        message: "Success delete all todo",
      });
    } catch (err) {
      res.json({
        status: false,
        code: 500,
        message: err.message,
      });
    }
  },
};