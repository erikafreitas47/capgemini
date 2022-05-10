import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {

  constructor(private serviceCliente: ClienteService) {
    this.getAll()
  }

  getAll () {
    this.serviceCliente.getAll().subscribe(x=> console.log(x));
  }

}
