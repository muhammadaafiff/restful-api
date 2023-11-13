const { Todo } = require("../models");

module.exports = {
  postTodo: (req, res) => {},

  getAllTodo: async (req, res) => {
    const user = req.user;

    try {
      const todos = await Todo.findAll({
        where: {
          userId: user.id,
        },
      });

      res.json({
        message: "Success getAll Todo",
        data: todos,
      });
    } catch (err) {
      res.json(err.message);
    }
  },

  getTodoById: (req, res) => {},

  updateTodoById: (req, res) => {},

  deleteTodoById: (req, res) => {},

  deleteAllTodo: (req, res) => {},
};