const express = require("express");
const router = express.Router();

const authorController = require('../controller/authorController.js');
const blogController = require('../controller/blogController.js');

router.post('/authors', authorController.createAuthor);
router.post('/createBlog', blogController.createBlog);
router.get('/gettingBlogs',blogController.getBlogs);
module.exports = router;
