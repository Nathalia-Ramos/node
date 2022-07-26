
var express = require ('express');

var bodyParser = require('body-parser');

var app = express;
 
//configura o bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); //ver na documentação
  
//rotas
app.get('/', function(req, res){
      res.sendFile(__dirname + '/form.html');
});
app.post('/receber', function(req, res){
    res.write('req.body.nome')
    res.end();
});

app.listen(8080);