import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll () {
    let url = 'https://ms-ef-cliente.herokuapp.com/clientes'
    return this.http.get(url);
  }
}
