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
  ativado: boolean = true

  constructor(private carrinhoService: CarrinhoService, 
    public appComponent: AppComponent) { }

  ngOnInit() {

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

  delete(i){
    let produtos = localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];
      
    produtos = produtos.filter(p => p.index !== i);

    localStorage.setItem("produtos", JSON.stringify(produtos));
    this.lista();
    this.appComponent.atualizaNumero();
  }
}
