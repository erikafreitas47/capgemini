import { IDao } from "./InterfaceDao";


class Venda implements IDao {
    data: string;
    cliente: string;

    constructor (data: string, cliente: string) {
        this.data = data;
        this.cliente = cliente;
    }

    salvar(): boolean {
        console.log("Venda cadastrada com sucesso.");        
        return true;
    }

    alterar(objeto: string): boolean {
        console.log("Venda alterada com sucesso!");
        return true;        
    }

    consultar(): string[] {
        let x: string[] = [];
        return x;
    }

    excluir(id: number): void {
        //
    }

    consultarPorId(id: number): string {
        return "Maria"
    }
}

let venda1: Venda;
venda1 = new Venda("20/04/22", "Maria");
venda1.salvar();
venda1.alterar("Maria José");