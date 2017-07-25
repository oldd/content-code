const express = require('express')
const router = express.Router()
const BlogController = require('../controllers/blogs_controller')

router.get('/', BlogController.view)

router.post('/', BlogController.create)

module.exports = router
