const argon = require("argon2");

const hash = async (password) => {
  const hashPass = await argon.hash(password);
  return hashPass;
};

const verify = async (hashPass, password) => {
  const isCorrect = await argon.verify(hashPass, password);
  return isCorrect;
};

module.exports = { hash, verify };
