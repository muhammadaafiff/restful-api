const { Op } = require("sequelize");
const { Todo } = require("../models");
const { User } = require("../models");

module.exports = {
    createTodo: async (req, res) => {
        let data = req.body;
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
      const todos = await Todo.findOne({
        where: {
          [Op.and]: [{ userId: user.id }, { id: todoId }],
        },
      });

      if (!todos) throw new Error("Todo not found");

      res.json({
        message: "Success get Todo by Id",
        data: todos,
      });
    } catch (err) {
      res.json(err.message);
    }
  },

  updateTodoById: (req, res) => {},

  deleteTodoById: (req, res) => {},

  deleteAllTodo: (req, res) => {},
};