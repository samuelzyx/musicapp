'use strict';

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var userSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    role: String,
    image: String
});

module.exports = Mongoose.model('User', userSchema);