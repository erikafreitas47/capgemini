const express = require("express");
const app = express();
const port = 8080;

//middleware para utilizar urlencoded
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (request, response) => {
    response.send("Oi mundo!")
})

app.get('/contatos', (request, response) => {
    response.send("Serviço de contatos")
})

app.get('/contatosid/:idContato', (request, response) => {
    let idContato = request.params.idContato;
    response.status(200).send({idContato: idContato})
})

app.post('/salvarContato', (request, response) => {
    response.status(201).send(
        [
            {
                mensage: 'Contato salvo com sucesso!',
                id: '1',
                nome: 'Maria',
                fone: '1234-5678',
                email: 'maria@gmail.com'
            }
        ]
    )
})

app.delete('deleteContato/:idContato', (request, response) => {
    let idContato = req.params.idContato
    response.status(204).send();
})

//

app.post('/cadastroProduto', (request, response) => {
    response.status(201).send(
        [
            {
                id: request.body.id,
                descricao: request.body.descricao,
                preco: request.body.preco,
                estoque: request.body.estoque
            }
        ]
    )
})

app.put('/atualizarProduto/:idProduto', (request, response) => {
    let idProduto = request.params.idProduto;
    response.status(202).send(
        [
            {
                id: request.body.id,
                descricao: request.body.descricao,
                preco: request.body.preco,
                estoque: request.body.estoque,
                alterado: idProduto
            }
        ]
    )
})



//

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})