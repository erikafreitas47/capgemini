const express = require("express");
const app = express();
const cors = require("cors");
const port = 9090;
var dados = require('./databaseProdutos');

//middleware para utilizar urlencoded
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//middleware cors
app.use(cors());


//PRODUTOS
app.get('/produtos', (request, response) => {
    response.status(200).send(dados)
       
})

app.get('/produtos/:idProduto', (request, response) => {
    let idProduto = request.params.idProduto;
    let produtoEncontrado = {}
    for (let i of dados) {
        if (i.id == idProduto) {
            produtoEncontrado = i;
        }
    }
    response.status(200).send(
        {
            message: 'Produto encontrado:',
            produtoEncontrado
        }
    )
})



app.post('/produtos/cadastrar', (request, response) => {
    let novoProduto = {
        id: dados.length + 1,
        descricao: request.body.descricao,
        preco: request.body.preco,
        estoque: request.body.estoque
    }

    dados.push(novoProduto);
    response.status(201).send(
        {
            message: 'Produto cadastrado com sucesso!',
            novoProduto
        }
    )
})

app.put('/produtos/atualizar/:idProduto', (request, response) => {
    let idProduto = request.params.idProduto;
    let produtoAtualizado = {}
    for (let i of dados) {
        if (i.id == idProduto){
            i.nome = request.body.nome,
            i.preco = request.body.preco,
            i.estoque = request.body.estoque
            produtoAtualizado = i
        }
    }
    response.status(200).send(
        [
            {
                message: 'Produto atualizado com sucesso!',
                produtoAtualizado
            }
        ]
    )
})

app.delete('/produtos/deletar/:idProduto', (request, response) => {
    let idProduto = request.params.idProduto;
    let posicao = 0;
    for (let i of dados) {       
        if (i.id == idProduto) {
            break;
        }
        posicao++
    }
    dados.splice(posicao, 1)
    response.status(200).send(
        [        
            {
                message: 'Produto deletado com sucesso!'
            }
        ]            
    )
})


//
app.listen(port, () => {
    console.log(`Servidor de Produtos rodando na porta ${port} :)`);
})