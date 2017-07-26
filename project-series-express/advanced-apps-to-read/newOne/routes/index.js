var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cecilia', function(req, res, next) {
  res.send('');
});

router.get('/rude', function(req, res, next) {
  res.send('you smell');
});

router.get('/chairs', function(req, res, next) {
  res.send('four of them');
});

module.exports = router;
