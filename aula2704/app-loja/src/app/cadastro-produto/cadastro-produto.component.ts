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
    this.serviceProduto.gravar(dados).subscribe(x => this.msg = "Produto cadastrado com sucesso!");    
  }

  limparMsg () {
    this.msg = "";
  }

  ngOnInit(): void {
  }

}
