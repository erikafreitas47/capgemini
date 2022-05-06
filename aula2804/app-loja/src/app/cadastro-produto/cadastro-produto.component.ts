import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  constructor(private serviceProduto: ProdutoService) { }

  msg: string = "";
  //produtos: any;

  gravar(dados: any){    
    this.serviceProduto.gravar(dados).subscribe(x => window.location.reload());    
  }

  limparMsg () {
    this.msg = "";
  }

  ngOnInit(): void {
  }

  //excluir(id:any){
  //  this.serviceProduto.excluir(id).subscribe(x => {window.location.reload()})
  //}

}
