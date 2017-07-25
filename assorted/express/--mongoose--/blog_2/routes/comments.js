const express = require('express')
const router = express.Router()
const CommentController = require('../controllers/comments_controller')

router.post('/:blogId', CommentController.create)

module.exports = router
