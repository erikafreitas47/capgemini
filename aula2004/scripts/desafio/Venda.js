"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Venda {
    constructor(data, cliente) {
        this.data = data;
        this.cliente = cliente;
    }
    salvar() {
        console.log("Venda cadastrada com sucesso.");
        return true;
    }
    alterar(objeto) {
        console.log("Venda alterada com sucesso!");
        return true;
    }
    consultar() {
        let x = [];
        return x;
    }
    excluir(id) {
        //
    }
    consultarPorId(id) {
        return "Maria";
    }
}
let venda1;
venda1 = new Venda("20/04/22", "Maria");
venda1.salvar();
venda1.alterar("Maria José");
