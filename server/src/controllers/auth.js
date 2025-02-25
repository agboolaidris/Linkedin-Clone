const { Error } = require("mongoose");
const User = require("../models/user");

const { compare, hash } = require("../utilis/bcrypt");
const { sign } = require("../utilis/jwt");

//@route POST api/auth/register
//@desc  Register User
//@access public route
exports.register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).json({ msg: "email address has been taken" });

    const password = await hash(req.body.password);

    const data = new User({
      email: req.body.email,
      password,
      username: req.body.username,
    });

    await data.save();
    res.json({ msg: "user register successful" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//@route POST api/auth/login
//@desc  Login User
//@access public route
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "invalid credentials" });

    const isMatch = await compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ msg: "email or password does not exist" });

    const token = await sign(user._id);
    if (!token) throw new Error("jwt error");

    res
      .cookie("access-token", token, { httpOnly: true })
      .json("login successful");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//@route delete api/auth/user
//@desc  persistence Login
//@access PRIVATE route
exports.deleteAccount = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.userID);
    if (!user)
      return res.status(404).json({ msg: "no such account in the database" });
    res.json({ msg: "account deleted" });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

//@route GET api/auth/persistence
//@desc  persistence Login
//@access PRIVATE route
exports.persistenceLogin = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userID });

    if (!user) return res.status(404).json({ msg: "user doesn't exist " });
    res.json("login successful");
  } catch (error) {
    res.json(500).json({ msg: error.message });
  }
};

//@route  POST api/auth/logout
//@desc   Logout user
//@access PRIVATE route
exports.logout = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userID });
    if (!user) return res.status(404).json({ msg: "user not found" });
    res.clearCookie("access-token").json({ msg: "user logout" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
