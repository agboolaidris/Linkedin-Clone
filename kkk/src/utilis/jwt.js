const jwt = require("jsonwebtoken");

exports.sign = async (id) => {
  const sign = await jwt.sign({ id: id }, process.env.JWT_SECRET);
  return sign;
};

exports.verify = async (token) => {
  const verify = await jwt.verify(token, process.env.JWT_SECRET);

  return verify;
};
