'use strict';
// dependencias
var express = require('express');
var userController = require('../controllers/user');

// comienza el codigo
var api = express.Router();

api.post('/register', userController.register);

module.exports = api;