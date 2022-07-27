var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//template
app.engine('handlebars', expressHandlebars({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

app.get('/' , function(req, res){
    res.render ('inicio')
});

app.listen(8080);