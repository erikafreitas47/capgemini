import { Component } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})

export class ListasComponent {

frutas: string[] = []

  constructor() {
    this.frutas.push("Maçã")
    this.frutas.push("Laranja")
    this.frutas.push("Uva")
    this.frutas.push("Limão")
  }
}
