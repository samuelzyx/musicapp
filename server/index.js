'use strict';
//Config data base

var mongoose = require('mongoose');
var app = require('./app');
var port = 5000;

app.listen(port, function(){
    console.log("Servidor api rest escuchando en http://localhost:"+port);
})

