import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-contato',
  templateUrl: './consulta-contato.component.html',
  styleUrls: ['./consulta-contato.component.css']
})
export class ConsultaContatoComponent implements OnInit {

  contatos = [
    {
      id: 1,
      nome: 'Ana',
      fone: '1234-5678',
      email: 'ana@gmail.com'
    },
    
    {
      id: 2,
      nome: 'Pedro',
      fone: '5555-5555',
      email: 'pedro@gmail.com'
    }  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
