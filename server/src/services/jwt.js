const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.APP_SECRET);
  return token;
};

const verifyToken = (payload) => {
  const check = jwt.verify(payload, process.env.APP_SECRET);
  return check;
};

module.exports = { createToken, verifyToken };
