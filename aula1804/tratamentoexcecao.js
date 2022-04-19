function teste (n1, n2) {
    try {
        if (n2 == 0) {
            throw "Não é possível dividir por zero."
        }
        if (n1 == undefined ) {
            throw "Informe o número 1"
        }
        
        let x = n1/n2;
              
        console.log(x);

    } catch (erro) {
        console.log(`Erro: ${erro}`);
    }
}

//teste(undefined, 1);

function pegarDadosArray () {
    let a = [1,2,3,4,5,6];

    try {
        let i = 6;
        
        if (i >= a.length ) {
            throw "Índice de array inválido."
        }

        let x = a[6];
        console.log(x);
    }
    catch (err) {
        console.log(err);
    }
    
}

pegarDadosArray();
