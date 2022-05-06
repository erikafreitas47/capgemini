import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private serviceUsuario: UsuarioService) { }

  msg: string = "";

  gravarUser(dados: any) {
    dados = { ... dados, perfil: 'USER'}
    this.serviceUsuario.gravarUser(dados).subscribe( x => this.msg = "Usuário cadastrado com sucesso!");
    //window.location.reload();
  }

  limparMsg () {
    this.msg = "";
  }

  ngOnInit(): void {
  }

}
