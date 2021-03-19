const Route = require("express").Router();
const {
  register,
  login,
  deleteAccount,
  persistenceLogin,
  logout,
} = require("../controllers/auth");
const { validateRegister, validateLogin } = require("../validator/auth");
const Auth = require("../middleware/auth");

//@route GET api/auth/test
//@desc TEST route
//@access public route
Route.get("/test", (req, res) => {
  res.json({ msg: "hello" });
});

//@route POST api/auth/register
//@desc  Register User
//@access public route
Route.post("/register", [validateRegister], register);

//@route POST api/auth/login
//@desc  Login User
//@access public route
Route.post("/login", [validateLogin], login);

//@route  GET api/auth/persistence
//@desc   Persistence Login
//@access PRIVATE route
Route.get("/persistence", [Auth], persistenceLogin);

//@route  GET api/auth/user
//@desc   logout user account
//@access PRIVATE route
Route.post("/logout", [Auth], logout);

//@route DELETE api/auth/user
//@desc  delete user account
//@access PRIVATE route
Route.delete("/user", [Auth], deleteAccount);

module.exports = Route;
