const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/auth_jwt_practice', {
  useMongoClient: true
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', routes)

app.use((error, req, res, next) => {
  res.status(422).send({ error: error })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
