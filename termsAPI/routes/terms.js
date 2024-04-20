const express = require('express');
const router = express.Router();
const Terms = require('../models/terms');

// Create a new post (POST request)
router.post('/', async (req, res) => {
  const { title,hash, content } = req.body;

  try {
    const newPost = new Post({ title,hash, content });
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully!', post: newPost });
  } catch (err) {
    res.status(500).json({ message: 'Error creating post!', error: err.message });
  }
});

// Get all posts (GET request)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts!', error: err.message });
  }
});

module.exports = router;
