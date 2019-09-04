'use strict';
//Config data base
var mongoose = require('mongoose');
var app = require('./app');
var port = 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/musicsam',{ useNewUrlParser: true }, (err,res) =>{
    if(err){
        throw err;
    }
    else{
        console.log("Conexion a base de datos exitosa");
        app.listen(port, function(){
            console.log("Servidor api rest escuchando en http://localhost:"+port);
        })
    }
})