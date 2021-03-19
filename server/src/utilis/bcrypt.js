const bcrypt = require("bcrypt");

exports.hash = async (password) => {
  const gen = await bcrypt.genSalt(8);
  const hash = await bcrypt.hash(password, gen);

  return hash;
};

exports.compare = async (password, password2) => {
  const compare = await bcrypt.compare(password, password2);
  return compare;
};
