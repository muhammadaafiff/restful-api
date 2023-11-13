const bcrypt = require("bcrypt");
const saltRounds = 10;
const { User } = require("../models");

module.exports = {
  login: (req, res) => {},

  register: async (req, res) => {
    const data = req.body;

    try {
        const hashPassword = bcrypt.hashSync(data.password, saltRounds);
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