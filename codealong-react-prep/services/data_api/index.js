var routes = require('./routes');
var auth = require('./auth');

var express = require('express');
var api = express.Router();

api.use(auth);
api.use(routes);

module.exports = api;