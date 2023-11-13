require("dotenv").config()

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken")
const { User } = require("../models");

module.exports = {
    login: async (req, res) => {
        const data = req.body;
        try {
          const user = await User.findOne({ where: { username: data.username } });
          const passwordMatch = bcrypt.compareSync(data.password, user.password);
          const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY);
    
          if (!user || !passwordMatch) throw new Error("username or password incorrect");
    
          res.json({
            message: "login succesfull",
            userId: user.id,
            token,
          });
        } catch (err) {
          res.json(err.message);
        }
      },

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
      res.json(err.message);
    }
  },
};