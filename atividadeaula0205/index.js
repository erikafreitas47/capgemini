const express = require("express");
const app = express();
const port = 9090;

var dados = require('./database')

//middleware para utilizar urlencoded
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//CLIENTE
app.post('/cadastroCliente', (request, response) => {
    const novoCliente = {
        id: request.body.id,
        nome: request.body.nome,
        fone: request.body.fone,
        limiteCredito: request.body.limiteCredito
    }

    dados.push(novoCliente);

    response.status(201).send(
        [
            {
                mensage: 'Cliente cadastrado com sucesso!',
                novoCliente
            }
        ]
    )
    
})

app.get('/clientes', (request, response) => {
    response.status(200).send(
        {
            message: 'Lista de Clientes:',
            dados
        }
    )
})

app.get('/clientes/:idCliente', (request, response) => {
    let idCliente = request.params.idCliente;
    let clienteEncontrado = {}
    for (let i of dados) {
        if (i.id == idCliente) {
            clienteEncontrado = i;
        }
    }
    response.status(200).send(
        {
            message: 'Cliente encontrado:',
            clienteEncontrado
        }
    )
})

app.put('/clientes/atualizar/:idCliente', (request, response) => {
    let idCliente = request.params.idCliente;
    let clienteAtualizado = {}
    for (let i of dados){
        if (i.id == idCliente){
            i.nome = request.body.nome,
            i.fone = request.body.fone,
            i.limiteCredito = request.body.limiteCredito
            clienteAtualizado = i;
        }
    }
    response.status(200).send(
        [
            {
                message: 'Cliente atualizado com sucesso!',
                clienteAtualizado
            }
        ]
    )
})

app.delete('/clientes/deletar/:idCliente', (request, response) => {
    let idCliente = request.params.idCliente;
    let posicao = 0;
    for (let i of dados) {       
        if (i.id == idCliente) {
            break;
        }
        posicao++
    }
    dados.splice(posicao, 1)
    response.status(200).send(
        [        
            {
                message: 'Cliente deletado com sucesso!'
            }
        ]            
    )

})

//
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} :)`);
})