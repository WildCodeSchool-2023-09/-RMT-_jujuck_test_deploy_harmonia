const { verifyToken } = require("../services/jwt");

const checkUser = (req, res, next) => {
  const decode = verifyToken(req.cookies.auth);
  if (decode) {
    req.user = decode;
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = {
  checkUser,
};
