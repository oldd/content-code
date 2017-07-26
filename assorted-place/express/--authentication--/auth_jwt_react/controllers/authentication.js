const User = require('../models/user')
const jwt = require('jwt-simple')
const secret = require('../config/secret')

tokenForUser = (user) => {
  return jwt.encode({sub: user.id}, secret)
}

module.exports = {
  signup(req, res, next) {

    const email = req.body.email
    const password = req.body.password

    //Send a custom error message when the email and password isn't given
    if (!email || !password) {
      return res.status(422).send({error: 'You must provide an email and password'})
    }
    // See if a user with given email exists
    User.findOne({ email }, (error, existingUser) => {
      if (error) { return next(error)}

      // If user with email exists, return error
      if (existingUser) {
        // 422 unproccesable entity
        return res.status(422).send({ error: 'Email is already in use'})
      }

      // If user does not exist, create and save user
      const user = new User({
        email: email,
        password: password
      });

      user.save(function(err) {
        if (err) { return next(err); }
        // Repond to request indicating the user was created
        res.send({ token: tokenForUser(user)})
      });
    })
  },
  signin(req, res, next) {
    res.send({ token: tokenForUser(req.user) })
  }
}
