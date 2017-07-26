const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const secret = require('../config/secret')
const User = require('../models/user')
const LocalStrategy = require('passport-local')

const localOptions = {
  usernameField: 'email'
}

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({email}, (error, user) => {
    user.compare(password, (error, isMatch) => {
      if (error) done(error)
      if (!isMatch) done(null, false)
      done(null, user)
    })
  })
})

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret
}

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

  User.findById(payload.sub, (error, user) => {
    if (error) done(error, false)
    if (!user) done(null, false)
    done(null,user)
  })
})

passport.use(jwtLogin)
passport.use(localLogin)
