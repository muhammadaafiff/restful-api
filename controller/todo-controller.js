const { Op } = require("sequelize");
const { Todo } = require("../models");
const { User } = require("../models");

module.exports = {
  createTodo: async (req, res) => {
    const data = req.body;
    try {
      await Todo.create(data);

      res.json({
        message: "Success Create Todo",
      });
    } catch (err) {
      res.json(err.message);
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

      res.json({
        message: "Success get All Todo",
        data: todos,
      });
    } catch (err) {
      res.json(err.message);
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

      if (!todo) throw new Error("Todo not found");

      res.json({
        message: `Success Get Todo ID ${todoId}`,
        data: todo,
      });
    } catch (err) {
      res.json(err.message);
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

      if (!todo) throw new Error("Todo not found");
      if (value === undefined) throw new Error("Invalid Request");

      const { dataValues } = todo;
      await Todo.update(
        { ...dataValues, ["value"]: value },
        {
          where: {
            id: todoId,
          },
        }
      );

      res.json({
        message: `Success Update Todo ID: ${todoId}`,
      });
    } catch (err) {
      res.json(err.message);
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

      if (!todos) throw new Error("Todo not found");

      res.json({
        message: `Success Delete Todo: ${todoId}`,
      });
    } catch (err) {
      res.json(err.message);
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

      res.json({
        message: "Success Delete All Todo",
      });
    } catch (err) {
      res.json(err.message);
    }
  },
};