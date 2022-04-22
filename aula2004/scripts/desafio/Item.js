"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(descricao, preco, qtde) {
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }
    salvar() {
        throw new Error("Method not implemented.");
    }
    alterar(objeto) {
        throw new Error("Method not implemented.");
    }
    consultar() {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
}
