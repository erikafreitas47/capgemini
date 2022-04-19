var http = require('http');
var meuModulo = require('./modulos/funcoes');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type' : 'text/html'});

    response.write('<h1> Testando funcao soma </h1>');
    response.write(`100 + 50 = ${meuModulo.soma(100,50)}`);
    response.write('<hr>');

    response.write('<h1> Testando funcao subtracao </h1>');
    response.write(`100 - 50 = ${meuModulo.subtracao(100,50)}`);
    response.write('<hr>');

    response.write('<h1> Testando funcao multiplicacao </h1>');
    response.write(`100 x 50 = ${meuModulo.multiplicacao(100)}`);
    response.write('<hr>');

    response.write('<h1> Testando funcao divisao </h1>');
    response.write(`100 / 50 = ${meuModulo.divisao(100,50)}`);
    response.write('<hr>');

    response.end();

}).listen(9090);

console.log("Servidor rodando!");