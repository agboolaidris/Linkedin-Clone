const { verify } = require("../utilis/jwt");

const auth = async (req, res, next) => {
  const token = req.cookies["access-token"];
  if (!token)
    return res
      .status(400)
      .json({ msg: "authorization denied, pls login again" });

  const compare = await verify(token);
  if (!compare)
    return res
      .status(400)
      .json({ msg: "authorization denied, unable to verified the user" });
  req.userID = compare.id;
  next();
};

module.exports = auth;
