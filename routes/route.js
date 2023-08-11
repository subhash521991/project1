const express = require('express');
const router = express.Router();

const middlewares = require('../middleware/auth.js');

const authorController = require('../controllers/authorController.js');
const blogController = require('../controllers/blogController.js');


router.post('/authors', authorController.createAuthor);
router.post('/createBlog', middlewares.authentication, blogController.createBlog); 

module.exports = router;  