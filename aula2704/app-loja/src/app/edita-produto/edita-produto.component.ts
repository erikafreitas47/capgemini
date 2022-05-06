import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.css']
})
export class EditaProdutoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private serviceProduto: ProdutoService) { }

  produto: any;
  msg: string = "";

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idproduto: number = Number(routeParams.get('idproduto'));
    this.serviceProduto.getOne(idproduto).subscribe(x => this.produto = x);
  }

  efetivarAlteracao(){
    this.serviceProduto.update(this.produto).subscribe(x => this.msg = "Registro alterado com sucesso!");    
  }

}
