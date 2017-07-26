var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('loged in home page');
});

router.get('/add', ...)

module.exports = router;
