import { IDao } from "./InterfaceDao";

class Item implements IDao {
    descricao: string;
    preco: number;
    qtde: number;

    constructor (descricao: string, preco: number, qtde: number) {
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }
    salvar(): boolean {
        throw new Error("Method not implemented.");
    }
    alterar(objeto: string): boolean {
        throw new Error("Method not implemented.");
    }
    consultar(): string[] {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id: number): string {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): void {
        throw new Error("Method not implemented.");
    }


}