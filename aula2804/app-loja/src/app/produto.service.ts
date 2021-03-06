import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor (private http: HttpClient) { }

  gravar (dados: any){
    let url = 'http://localhost:3000/produtos'
    return this.http.post(url, dados);
  }

  getAll () {
    let url = 'http://localhost:7080/pessoas'
    return this.http.get(url);
  }

  getOne (idproduto: number){
    return this.http.get(`http://localhost:3000/produtos/${idproduto}`);
  }

  update(dados: any){
    let url = `http://localhost:3000/produtos/${dados.id}`
    return this.http.put(url, dados);
  }

  excluir(idproduto: number){
    return this.http.delete(`http://localhost:3000/produtos/${idproduto}`)
  }
  
}
