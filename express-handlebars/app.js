
var express = require ('express');
var exphbs = require ('express-handlebars');

var app = express();

//templante utilizando express-handlebars
app.engine('handlebars', exphbs.engine({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    let pessoas =[
        {"nome": "Ricardo", "idade": 20},
        {"nome": "Nat", "idade": 20},
        {"nome": "José", "idade": 20},
        {"nome": "Maria", "idade": 20}
    ]
    
    res.render('inicio', {treinandoNode:false, dados:pessoas});
});

app.get('/sobre', function(req, res){
    res.render('sobre');
});
app.listen(3000);

