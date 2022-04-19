function conectar () {
    console.log("Abrindo conexão com o banco de dados");
}

function desconectar () {
    console.log("Fechando conexão com o banco de dados");
}

function cadastrar (dados) {
    try {
        conectar ()

        if (dados == 2) {
            throw "Faltam dados a serem enviados para o banco"
        }

        console.log("Dados gravados com sucesso");

    } catch (err) {
        console.log(err);
    } finally {
        desconectar ();
    }
}

cadastrar(2);