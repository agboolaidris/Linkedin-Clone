//load Post module
const Post = require("../models/post");
//load user profile module
const User = require("../models/user");

//@route POST api/post
//@desc   create a post
//@access public route
exports.createPost = async (req, res) => {
  try {
    if (!req.file)
      return res
        .status(400)
        .json({ msg: "image must be in .jpeg, .jpg, or .png format " });
    const post = new Post({
      text: req.body.text,
      pictures: req.file.path,
      user: req.userID,
    });
    const data = await post.save();
    const response = await Post.findOne({ _id: data._id });
    res.json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//@route GET api/post
//@desc   fetch all post
//@access public route
exports.fetchAllPost = async (req, res) => {
  try {
    const post = await Post.find({}, null, { sort: { createAt: -1 } });
    if (!post)
      return res
        .status(404)
        .json({ msg: "there is no post yet in the datebase" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//@route GET api/post
//@desc   fetch all post
//@access public route
exports.fetchPost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id }).populate("user");
    if (!post)
      return res
        .status(404)
        .json({ msg: "there is no such post in the datebase" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//@route DELETE api/post/:id
//@desc   delete sindle post
//@access PRIVATE route
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({
      user: req.userID,
      _id: req.params.id,
    });
    if (!post)
      return res
        .status(404)
        .json({ msg: "there is no such post in the datebase" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//@route  POST api/post/like/:id
//@desc   like  post
//@access PRIVATE route
exports.likePost = async (req, res) => {
  try {
    //search for the post in the database
    const post = await Post.findOne({ _id: req.params.id });
    if (!post) return res.status(404).json({ msg: "the post not found" });

    const find = post.likes.find((e) => e == req.userID); //check if the user already like the post

    if (!find) {
      post.likes.push(req.userID); //if user already like the post remove the user from the post like
    } else {
      post.likes = post.likes.filter((e) => e != req.userID); //else add the user to the post like
    }
    const data = await post.save();
    const response = await Post.findOne({ _id: data._id });

    res.json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.commentPost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post)
      return res.status(404).json({ msg: "post not found in databae " });
    const comment = {
      text: req.body.text,
      user: req.userID,
    };
    post.comments.push(comment);

    const data = await post.save();
    const response = await Post.findOne({ _id: data._id });
    res.json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    if (!post)
      return res.status(404).json({ msg: " post not found in the database " });

    const find = post.comments.find((e) => {
      if (e.user._id == req.userID && e._id == req.params.comment_id)
        return e._id.toString() == req.params.comment_id;
    });
    if (!find) return res.status(401).json({ msg: "comment not found" });

    post.comments = post.comments.filter((e) => e._id != req.params.comment_id);
    const data = await post.save();

    const response = await Post.findOne({ _id: data._id });

    res.json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
