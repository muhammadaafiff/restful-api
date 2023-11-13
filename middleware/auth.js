require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) throw new Error("Invalid header");

    const token = header.split(" ")[1];
    if (!token) throw new Error("There is no token");

    const user = jwt.verify(token, process.env.JWT_KEY);
    req.user = user;

    next();
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = verifyToken;