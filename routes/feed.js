const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedController.getPosts);

// POST /feed/post
router.post("/post", feedController.createPost);

router.get("/post/:postId", feedController.getPost);

router.put("/post/:postId", feedController.updatePost);

router.delete("/post/:postId", feedController.deletePost);

module.exports = router;
