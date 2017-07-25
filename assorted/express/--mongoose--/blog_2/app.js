const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const blogs = require('./routes/blogs')
const comments = require('./routes/comments')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog_relational_2', {
  useMongoClient: true
})

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.use('/blogs', blogs)
app.use('/comments', comments)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
