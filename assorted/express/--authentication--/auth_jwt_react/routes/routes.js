const express = require('express')
const router = express.Router()
const Authentication = require('../controllers/authentication')
const passport = require('passport')
const passportService = require('../services/passport')
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

router.get('/', requireAuth, (req, res) => {
  res.send('welcome to the homepage')
})

router.post('/signup', Authentication.signup)
router.post('/signin', requireSignin, Authentication.signin)

module.exports = router
