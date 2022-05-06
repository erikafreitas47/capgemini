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
    return this.http.get('http://localhost:3000/produtos');
  }

  getOne (idproduto: number){
    return this.http.get(`http://localhost:3000/produtos/${idproduto}`);
  }

  update(dados: any){
    let url = `http://localhost:3000/produtos/${dados.id}`
    return this.http.put(url, dados);
  }
  
}
