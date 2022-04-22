import Pessoa from './Pessoa'

// let p1: Pessoa;
 //p1 = new Pessoa(1, 'Maria', 'maria@gmail.com');
 //p1.display();
 

 class PessoaFisica extends Pessoa {
     cpf: string;
     constructor (id: number, nome: string, contato: string, cpf: string){
         super (id, nome, contato);
         this.cpf = cpf;
     }

     display (): string {
         let p: string = super.display();
         return `${p} CPF: ${this.cpf}`
     }
 }

 let pf = new PessoaFisica (2, 'Erika', 'erika@gmail.com', '123.456.789.00');
 console.log(pf.display());

