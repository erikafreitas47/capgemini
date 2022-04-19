var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){

    fs.readFile('cadastro.html',
        function(err, data) {
            response.writeHead(200, { 'Content-type' : 'text/html'});
            response.write(data);
            return response.end();
        }
    )

    console.log("Servidor rodando!");

}).listen(8080)