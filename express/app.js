//import express
var express = require ('express');

//varivel com acesso as funcionalidades do express
var app = express();

app.get('/', function(req, res){
    res.write('express');
    res.end();
})

app.listen(8080);