exports.validatePost = (req, res, next) => {
  const { text, avater } = req.body;
  console.log(req.body);

  if (!text) return res.status(400).json({ msg: "text is required " });
  if (text.length < 10)
    return res
      .status(400)
      .json({ msg: "text must be greater than 10 characters " });

  next();
};
