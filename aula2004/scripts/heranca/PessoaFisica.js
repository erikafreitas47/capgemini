"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
// let p1: Pessoa;
//p1 = new Pessoa(1, 'Maria', 'maria@gmail.com');
//p1.display();
class PessoaFisica extends Pessoa_1.default {
    constructor(id, nome, contato, cpf) {
        super(id, nome, contato);
        this.cpf = cpf;
    }
    display() {
        let p = super.display();
        return `${p} CPF: ${this.cpf}`;
    }
}
let pf = new PessoaFisica(2, 'Erika', 'erika@gmail.com', '123.456.789.00');
console.log(pf.display());
