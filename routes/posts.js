const express = require("express");
const router = express.Router();

//import controller
const {  dummyLink, likePost, unlikePost } = require("../controllers/LikeController");
const { createComment } = require("../controllers/CommentController");
const { createPost, getAllPost, updatePost, deletePost } = require("../controllers/PostController");

//define API routes -- MAPPING
router.get("/dummyroute",dummyLink)
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts",getAllPost);
// --------------------------------------------------------------------------------
router.put("/posts/update/:id", updatePost); // Added route for updating posts
router.delete("/posts/delete/:id", deletePost); // Added route for deleting posts
// -----------------------------------------------------------------------------------
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);
//export
module.exports = router;
