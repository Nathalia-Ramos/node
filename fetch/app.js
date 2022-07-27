var express = require('express');
var fetch = require('node-fetch');//faz requisições

var app = express();

app.get('/', function(req, res){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resposta => resposta.json())
    .then(resposta=>console.log(resposta))

    res.end();
});
app.listen(8080);