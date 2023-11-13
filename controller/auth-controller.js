const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  login: (req, res) => {},

  register: async (req, res) => {
    const data = req.body;

    try {
      const hashPassword = bcrypt.hashSync(data.password, 10);
      data.password = hashPassword;
      await User.create(data);

      res.json({
        message: "register succesfull",
      });
    } catch (err) {
      res.send(err.message);
    }
  },
};