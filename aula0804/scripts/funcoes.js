function ola () {
    alert("Olá mundo!");
}

function oi(nome){
    alert(`Ola ${nome}`)
}

function montarFrase(nome, sobrenome, idade){
    var mensagem = "maior"

    if (idade <18) {
        mensagem = "menor"
    }

    return `${nome} ${sobrenome}, você tem ${idade} anos, portanto você é ${mensagem} de idade.`

}

function validaIdade (idade) {
    if (idade < 18) {
        console.log("Você é menor de idade");
    }
    else {
        console.log("Você é maior de idade");
    }
}

function retornaSituacao (media){
    let situacao = "aprovado"

    if (media < 7){
        situacao = "reprovado"
    }
    return situacao
}

function retornaReprovado (media) {
    return media < 7
}

/*
ola();

validaIdade(12);

var retorno = retornaSituacao(8);
console.log(retorno);

var retornaBooleano = retornaReprovado(8);
console.log(retornaBooleano);
*/