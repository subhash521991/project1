const express = require("express");
const router = express.Router();
const authorController = require('../controller/authorController.js');
router.post = ('/author', authorController.createAuthor);
router.delete('/deleteAuthor/:authorId', authorController.deleteAuthor);
module.exports = router;