import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { CarrinhoService } from './carrinho.service';
import { Carrinho } from './carrinho';
import { Product } from '../product/product';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private subscription: Subscription;
  products: Product[];
  ativado: boolean = true;
  precoTotal: Number = 0;

  constructor(private carrinhoService: CarrinhoService,
    public appComponent: AppComponent) { }

  ngOnInit() {
    this.lista();
    this.valorTotal();
  }

  adicionarProduct(product: Product) {
    this.carrinhoService.adicionarProduct(product);
  }

  removerProduct(id: number) {
    this.carrinhoService.removerProduct(id);
  }

  lista() {
    return localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];
  }

  delete(i) {
    let produtos = localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];

    produtos = produtos.filter(p => p.index !== i);

    localStorage.setItem("produtos", JSON.stringify(produtos));
    this.lista();
    this.appComponent.atualizaNumero();
    this.valorTotal();
  }

  atualizarItem(produto, valor) {
    let produtos = localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];

    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].produto.id == produto.id) {
        if (produtos[i].quantidade > 1 || valor == 1) {
          if (valor == 0) {
            produtos[i].produto.preco = produtos[i].produto.preco - (produtos[i].produto.preco / produtos[i].quantidade);
            produtos[i].quantidade = produtos[i].quantidade - 1;
          }
          else {
            produtos[i].produto.preco = produtos[i].produto.preco + (produtos[i].produto.preco / produtos[i].quantidade);
            produtos[i].quantidade = produtos[i].quantidade + 1;
          }
          localStorage.setItem("produtos", JSON.stringify(produtos));
        } else {
          break;
        }
      }
    }
    this.appComponent.atualizaNumero();
    this.valorTotal();
  }

  valorTotal(){
    let produtos = localStorage.getItem("produtos") ?
    JSON.parse(localStorage.getItem("produtos")) :
    [];

    let  valorAux = 0;

    for (let i = 0; i < produtos.length; i++) {
     valorAux = valorAux + produtos[i].produto.preco;
    }

    this.precoTotal = valorAux;
  }
}
