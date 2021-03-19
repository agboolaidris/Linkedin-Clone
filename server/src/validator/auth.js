const validator = require("validator");

exports.validateRegister = (req, res, next) => {
  const { email, username, password, password2 } = req.body;

  if (!email) return res.status(400).json({ msg: "email is required" });

  if (!password) return res.status(400).json({ msg: "password is required" });

  if (!username) return res.status(400).json({ msg: "username is required" });

  if (!validator.isEmail(email))
    return res.status(400).json({ msg: "email is invalid" });

  if (username.length < 6)
    return res.status(400).json({ msg: "name length must be greater than 6" });

  if (password.length < 6)
    return res
      .status(400)
      .json({ msg: "password length must be greater than 5" });

  if (password !== password2)
    return res.status(400).json({ msg: "password does not match" });

  next();
};

exports.validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ msg: "email is required" });

  if (!password) return res.status(400).json({ msg: "password is required" });

  if (!validator.isEmail(email))
    return res.status(400).json({ msg: "email is invalid" });

  next();
};
