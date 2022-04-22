import Pessoa from "./Pessoa";

class PessoaJuridica extends Pessoa {
    cnpj: string;
    constructor (id: number, nome: string, contato: string, cnpj: string){
        super(id, nome, contato)
        this.cnpj = cnpj
    }

    display () : string {
        return `${super.display()}  CNPJ: ${this.cnpj}`
    }
}

let pj: PessoaJuridica;
pj = new PessoaJuridica(1, 'Muri Imports', 'ricardo@gmail.com', '123.0001/4');
console.log(pj.display());
