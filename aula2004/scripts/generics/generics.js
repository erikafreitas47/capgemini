"use strict";
class Contato {
    constructor(nome, fone) {
        this.nome = nome;
        this.fone = fone;
    }
}
function testeGenerics(x) {
    return x;
}
/*
console.log(testeGenerics<string>("ola mundo"))
console.log(testeGenerics<number>(15000))
let ct = new Contato('maria','122-3456');
console.log(testeGenerics<Contato>(ct))
*/
function lista(n1, n2) {
    let x = [n1, n2];
    return x;
}
console.log(lista('maria', 'maria@gmail'));
function listaComIdade(p1, p2, p3) {
    console.log(` ${p1} ${p2} ${p3}`);
}
listaComIdade("Maria", 20, false);
listaComIdade(10, false, "Ola!");
listaComIdade("José", 70, [1, 2, 3, 4]);
