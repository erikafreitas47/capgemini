import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll () {
    return this.http.get('http://localhost:3000/usuarios');
  }

  gravarUser(dados: any) {
    let url = 'http://localhost:3000/usuarios'
    return this.http.post(url,dados);
  }
  
}
