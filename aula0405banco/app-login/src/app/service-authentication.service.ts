import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthenticationService {

  constructor(private http: HttpClient) { }

  logar(email: string, senha: string){
    return this.http.post('http://localhost:7171/usuario/login', {
      email: email,
      senha: senha
    })

  }
}
