var express = require ('express');

var app = express();

//especifica uma pasta estática(diretorio)
app.use(express.static(__dirname + '/public'));

//rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/page.html');
})

app.listen(8080);