import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu primeiro componente!';
  nome: string = 'Erika';

  cliente = {
    id: 10,
    nome: 'José da silva'
  }

  trocar(){
    this.nome = 'Ana';
  }
}
