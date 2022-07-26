var http = require('http');

//cria o servidor
http.createServer(function(req, res){
    res.write('teste');
    res.end();
}).listen(3000);