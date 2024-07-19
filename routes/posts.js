const express = require("express");
const router = express.Router();

//import controller
const { dummyLikes, likePost, unlikePost } = require("../controllers/LikeController");
const { createComment } = require("../controllers/CommentController");
const { createPost, getAllPost } = require("../controllers/PostController");

//define API routes -- MAPPING
router.post("/dummyLikes",dummyLikes)
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts",getAllPost);
router.get("/likes/like",likePost);
router.get("/likes/unlikes",unlikePost);
//export
module.exports = router;
