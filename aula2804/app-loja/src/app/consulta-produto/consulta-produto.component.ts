import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-consulta-produto',
  templateUrl: './consulta-produto.component.html',
  styleUrls: ['./consulta-produto.component.css']
})
export class ConsultaProdutoComponent implements OnInit {

  produtos: any;

  constructor(private serviceProduto: ProdutoService) {
    this.serviceProduto.getAll().subscribe(x => this.produtos = x);
  }

  ngOnInit(): void {
  }

  excluir(id:any){
    this.serviceProduto.excluir(id).subscribe(x => {window.location.reload()})
  }

}
