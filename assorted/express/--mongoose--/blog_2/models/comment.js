const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  content: String,
  blog: {type: Schema.Types.ObjectId, ref: 'blog'}
})

const Comment = mongoose.model('comment', CommentSchema)

module.exports = Comment
