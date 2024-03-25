const express = require('express');
const router = express.Router();
const {createComment}=require('../controllers/CommentController')
router.post("/comments/create",createComment);
const {createPost,getAllPosts}=require("../controllers/postController");
router.post("/post/create",createPost);
router.get("/post/getAll",getAllPosts);
const {createLike,unlikePost}=require("../controllers/likeController");
router.post('/likes/post',createLike);
router.post('/unlike/post',unlikePost);


module.exports = router;
