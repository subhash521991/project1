const express = require('express');
const router = express.Router();

const middlewares = require('../middleware/auth.js');

const authorController = require('../controllers/authorController.js');
const blogController = require('../controllers/blogController.js');
const getController = require('../controllers/getController.js');
const deleteController = require('../controllers/deleteController.js');
const updateController = require('../controllers/updateController.js');
const loginController = require('../controllers/loginController.js');

router.post('/authors', authorController.createAuthor);
router.post('/createBlog', middlewares.authentication, blogController.createBlog);
router.post('/userLogin', loginController.login);

router.get('/blogs/:authorId', middlewares.authentication, getController.getBlog);
router.get('/blogs', middlewares.authentication, getController.getBlog);
router.delete('/deleteblog/:blogId', deleteController.deleteBlog);
router.delete('/deleteblog', deleteController.deleteBlog);
router.put('/updateBlog/:blogId', updateController.updateBlog); 
router.put('/updateBlog', updateController.updateBlog);
module.exports = router;  