require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = {
  login: async (req, res) => {
    const data = req.body;
    try {
      const user = await User.findOne({ where: { username: data.username } });
      const passwordMatch = bcrypt.compareSync(data.password, user.password);
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY);

      if (!user || !passwordMatch) throw new Error("Username or password incorrect");

      res.status(200).json({
        status: true,
        code: 200,
        message: "Login succesfull",
        userId: user.id,
        token,
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        code: 400,
        message: err.message,
      });
    }
  },

  register: async (req, res) => {
    const data = req.body;
    const saltRounds = 10;

    try {
      const hashPassword = bcrypt.hashSync(data.password, saltRounds);
      data.password = hashPassword;

      await User.create(data);

      res.status(201).json({
        status: true,
        code: 201,
        message: "Register succesfull",
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        code: 400,
        message: "Invalid request",
      });
    }
  },
};