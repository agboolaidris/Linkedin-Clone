const Route = require("express").Router();
const Auth = require("../middleware/auth");
const { multer } = require("../utilis/multer");
const {
  createPost,
  fetchAllPost,
  fetchPost,
  deletePost,
  likePost,
  commentPost,
  deleteComment,
} = require("../controllers/post");
const { validatePost } = require("../validator/post");

//@route  POST api/post
//@desc   create a post
//@access PRIVATE route
Route.post("/", [Auth, multer("avater"), validatePost], createPost);

//@route  GET api/post
//@desc   fetch all post
//@access PRIVATE route
Route.get("/", [Auth], fetchAllPost);

//@route  GET api/post/:id
//@desc   fetch single post
//@access PRIVATE route
Route.get("/:id", [Auth], fetchPost);

//@route DELETE api/post/:id
//@desc   delete sindle post
//@access PRIVATE route
Route.delete("/:id", [Auth], deletePost);

//@route  DELETE api/post/like/:id
//@desc   like  post
//@access PRIVATE route
Route.post("/like/:id", [Auth], likePost);

//@route  POST api/post/comment/:id
//@desc   comment on   post
//@access PRIVATE route
Route.post("/comment/:id", [Auth], commentPost);

//@route  DELETE api/post/comment/:id/:comment_id
//@desc   like  post
//@access PRIVATE route
Route.delete("/comment/:id/:comment_id", [Auth], deleteComment);

module.exports = Route;
