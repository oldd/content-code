const Blog = require('../models/blog')

module.exports = {
  view(req, res) {

    Blog.find({}, (error, blogs) => {
      if (error) console.log(error)
      res.send(blogs)
    })

    /*

    Populating the comments field with the actual comment instead of just the commentId

    Blog.find({}).populate('comments').exec( (error, blogs) => {
      if (error) console.log(error)
      res.send(blogs)
    })

    */
  },
  create(req, res) {
    Blog.create(req.body, (error, blog) => {
      if (error) console.log(error)
      res.send(blog)
    })
  }
}
