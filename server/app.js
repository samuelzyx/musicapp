var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var userRoutes = require('./routes/user');

// parser Json
app.use(bodyParser.urlencoded({extended:false}));
//parsear a json
app.use(bodyParser.json());

// http headers
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Methods');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// api rest endpoints

app.use('/api/user', userRoutes); //estructura api restfull


module.exports = app;