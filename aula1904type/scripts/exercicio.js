"use strict";
class Item {
    constructor(id, descricao, preco, qtde) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }
    totalItem() {
        return this.preco * this.qtde;
    }
    valorDesconto(taxa) {
        return this.totalItem() * (taxa / 100);
    }
    display(taxa) {
        console.log(`
            Descricao..: ${this.descricao}
            Preco......: ${this.preco}
            Qtde.......: ${this.qtde}
            Subtotal...: ${this.totalItem()}
            R$ Desconto: ${this.valorDesconto(taxa)}
            R$ Pago....: ${this.totalItem() - this.valorDesconto(taxa)}
            `);
    }
}
let item = new Item(1, "Celular", 2000, 2);
item.display(10);
