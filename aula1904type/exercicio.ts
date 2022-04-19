class Item {
    id: number;
    descricao: string;
    preco: number;
    qtde: number;

    constructor (id: number, descricao: string, preco: number, qtde: number) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }

    totalItem () : number {        
        return this.preco * this.qtde;        
    }

    valorDesconto ( taxa: number) : number {
        return this.totalItem() * (taxa/100);
    }

    display (taxa:number) : void {
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

let item = new Item (1, "Celular", 2000, 2);
item.display(10);