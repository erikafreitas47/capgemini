var urlBase = "http://localhost:3000/pessoas";

class Contato {
    constructor (id, nome, idade, registro) {
        this.id = id,
        this.nome = nome,
        this.idade = idade,
        this.registro = registro
    }

    salvar () {
        console.log(this);
        fetch(urlBase, {
                method: 'POST',
                body: JSON.stringify(this),
                headers: {
                    'Content-type' : 'Application/json'
                }
            }
        )
        .catch(erro => console.log(erro));         
    }

    consultarDados (display) {
        fetch(urlBase)
            .then(x => x.text())
            .then(data => display(data))
    }

    consultarById (idContato, display) {
        fetch(`${urlBase}/${idContato}`)
            .then(x => x.text())
            .then(data => display(data))
    }  

    atualizar () {
        fetch(`${urlBase}/${this.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(this),
                headers: {
                    'Content-type' : 'Application/json'
                    }
            }
        )
    }

 }