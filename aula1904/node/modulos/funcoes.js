var soma = function(n1, n2){
    return n1 + n2
}

var subtracao = (n1, n2) => {
    return n1 - n2
}

var multiplicacao = (n1, n2) => {
    try {
        if (n1 === undefined || n2 === undefined) {
            throw "Informe um valor para n1 e n2"
        }
    } catch (err) {
        return err
    }

    return n1 * n2
}

var divisao = (n1, n2) => {
    try {
        if (n1 === undefined || n2 === undefined) {
            throw "Informe um valor para n1 e n2"
        }

        if (n2 === 0) {
            throw "O divisor nao deve ser zero."
        }
    } catch (err) {
        return err
    }
    return n1 / n2
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}