function onSubmit () {
    var nome = document.getElementsByTagName("input")[0];

    if (nome.value === ""){
        alert("Informe o nome");
        nome.focus();
        return    
    }

    var idade = document.getElementsByTagName("input")[1];

    if (idade.value === ""){        
        alert("Informe a idade");
        idade.focus();
        return        
    }

    var email = document.getElementsByTagName("input")[2];

    if (email.value === ""){        
        alert("Informe o email");
        email.focus();
        return        
    }

    var data = document.getElementsByTagName("input")[3];

    if (data.value === ""){        
        alert("Informe a data");
        data.focus();
        return        
    }




    document.getElementsByTagName("form")[0].submit();
    document.getElementsByTagName("form")[1].submit();
    document.getElementsByTagName("form")[2].submit();
    document.getElementsByTagName("form")[3].submit();
    document.getElementsByTagName("form")[4].submit();
}