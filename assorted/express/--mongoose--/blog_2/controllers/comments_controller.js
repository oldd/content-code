const Comment = require('../models/comment')
const Blog = require('../models/blog')

module.exports = {
  create(req, res) {
    Comment.create({content: req.body.content, blog: req.params.blogId}, (error, comment) => {
      if (error) {
        console.log(error)
      } else {
        Blog.findByIdAndUpdate(req.params.blogId, {$push: {comments: comment._id}}, (error, updatedBlog) => {
          if (error) console.log(error)
          res.send(updatedBlog)
        })
      }
    })
  }
}
