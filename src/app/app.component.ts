import { Component, OnInit } from '@angular/core';

import {CarrinhoComponent} from './domain/carrinho/carrinho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tamanho:number = 0;
  constructor() { }

  ngOnInit() {

    let produtoStorage = JSON.parse(localStorage.getItem("produtos")).length;
    this.tamanho = produtoStorage;

  }
}
