function onSubmit() {

    var nome = document.getElementsByTagName("input")[0];
    var fone = document.getElementsByTagName("input")[1];
    var email = document.getElementsByTagName("input")[2];
    var rua = document.getElementsByTagName("input")[3];
    var bairro = document.getElementsByTagName("input")[4];
    var cidade = document.getElementsByTagName("input")[5];
    var cep = document.getElementsByTagName("input")[6];
    var limite = document.getElementsByTagName("input")[7];
    var foto = document.getElementsByTagName("input")[8];

    if (nome.value === ""){
        alert("Insira o nome");
        nome.focus();
        return
    }

    if (fone.value === ""){
        alert("Insira o fone");
        fone.focus();
        return
    }

    if (email.value === ""){
        alert("Insira o email");
        email.focus();
        return
    }

    if (rua.value === ""){
        alert("Insira a rua");
        rua.focus();
        return
    }

    if (bairro.value === ""){
        alert("Insira o bairro");
        bairro.focus();
        return
    }

    if (cidade.value === ""){
        alert("Insira a cidade");
        cidade.focus();
        return
    }

    if (cep.value === ""){
        alert("Insira o cep");
        cep.focus();
        return
    }

    if (limite.value === ""){
        alert("Insira o limite");
        limite.focus();
        return
    }

    if (foto.value === ""){
        alert("Insira a foto");
        foto.focus();
        return
    }

    document.getElementsByTagName("form")[0].submit();
    document.getElementsByTagName("form")[1].submit();
    document.getElementsByTagName("form")[2].submit();
    document.getElementsByTagName("form")[3].submit();
    document.getElementsByTagName("form")[4].submit();
    document.getElementsByTagName("form")[5].submit();
    document.getElementsByTagName("form")[6].submit();
    document.getElementsByTagName("form")[7].submit();
    document.getElementsByTagName("form")[8].submit();

}

function reset(){
    document.getElementById("form").reset();
}