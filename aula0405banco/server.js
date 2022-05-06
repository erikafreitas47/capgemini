const express = require("express");
const app = express();
const port = 7171;
const bcrypt = require("bcrypt");

app.use(express.urlencoded({extended: false}));
app.use(express.json());

var pg = require("pg");
var consString = "postgres://tveszjyquibgwj:7f2df332b444c341aaceb1949ba14309a401ababa765a8ce080be3ace2c882c7@ec2-44-194-4-127.compute-1.amazonaws.com:5432/d521s5jldioj32"

const pool = new pg.Pool( { connectionString: consString, ssl: { rejectUnauthorized: false} } )

app.get('/', (request, response) => {
    pool.connect((err, client) => {
        if (err) {
            return response.status(401).send("Conexão não autorizada!", err)
        }
        response.status(200).send("Conectado com sucesso com o banco de dados!");
    })
})

// create table usuarios (email varchar(50), senha varchar(200) perfil varchar(15))

app.get('/criartabelausuario', (request, response) => {
    pool.connect((err, client) => {
        if (err) {
            return response.status(401).send("Conexão não autorizada!", err)
        }

        var sql = 'create table usuarios (email varchar(50), senha varchar(200), perfil varchar(15))'

        client.query(sql, (error, result) => {
            if (error) {
                return response.status(401).send("Conexão não autorizada");
            }
            response.status(200).send(result.rows);
        })        
    })
})

// insert into usuarios(email,senha,perfil)values($1,$2,$3) 
app.post('/usuario', (request, response) => {

    pool.connect((err, client) => {

        if (err) {
            return response.status(401).send("Conexão não autorizada.");
        }

        client.query("select * from usuarios where email = $1", [request.body.email], (error, result) => {
            if (error){
                return response.status(401).send("Operação não autorizada");
            }

            if (result.rowCount > 0) {
                return response.status(200).send("Registro já existe!");
            }

            bcrypt.hash(request.body.senha, 10, (error, hash) => {
                if (error) {
                    return response.status(500).send(
                        {
                            messagem: "Eroo de autenticação.",
                            erro: error.message 
                        })
                }

                var sql = 'insert into usuarios(email, senha, perfil) values ($1,$2,$3)'

                client.query(sql,[request.body.email, hash, request.body.perfil],(error,result) => {
                    
                    if (error) {
                        return response.status(403).send("Operação não permitida.");
                    }
        
                    response.status(201).send({
                        mensagem: "Usuário criado com sucesso!",
                        status: 201
                    });
                })
            })
        })        
    });
})

app.get('/usuario', (request, response) => {
    pool.connect((err, client) => {
        if (err){
            return response.status(401).send("Conexão não autorizada.");
        }

        client.query('select * from usuarios', (error, result) => {
            if (error) {
                return response.status(401).send("Operação não autorizada.");
            }
            response.status(200).send(result.rows);
        })
    })
})

app.delete('/usuario/:email', (request, response) => {
    pool.connect((err, client) => {
        if (err) {
            return response.status(401).send("Conexão não autorizada.");
        }

        client.query('delete from usuarios where email = $1', [request.params.email], (error, result) => {
            if (error){
                return response.status(401).send("Operação não permitida.");
            }

            if (result.rowCount == 0){
                return response.status(401).send("Registro não encontrado.");
            }

            response.status(200).send({mensagem: "Registro deletado com sucesso!"});
        })
    })
})

app.get('/usuario/:email', (request, response) => {
    pool.connect((err, client) => {
        if (err) {
            return response.status(401).send("Conexão não autorizada.");
        }

        client.query('select * from usuarios where email = $1', [request.params.email], (error, result) => {
            if (error){
                return response.status(401).send("Operação não autorizada.");
            }

            response.status(200).send(result.rows[0]);
        })

    })
})

app.put('/usuario/:email', (request, response) => {
    pool.connect((err, client) => {
        if (err) {
            return response.status(401).send("Conexão não autorizada.");
        }

        client.query('select * from usuarios where email = $1', [request.params.email], (error, result) => {
            if (error) {
                return response.status(401).send("Operação não permitida.");
            }

            //update usuarios set senha=$1, perfil=$2 where email=$3
            if (result.rowCount > 0) {

                var sql = 'update usuarios set senha=$1, perfil=$2 where email=$3';
                let valores = [request.body.senha, request.body.perfil, request.body.email];

                client.query(sql, valores, (error2, result2) => {
                    if (error2) {
                        return response.status(401).send("Operação não permitida.");
                    }

                    if (result2.rowCount > 0){
                        return response.status(200).send("Registro alterado com sucesso!");
                    }
                })
            } else {
                response.status(200).send("Usuário não encontrado.");
            }
        })

    })
})

app.listen(port, () => {
    console.log(`Servidor em execução na porta http://localhost:${port}`);
})