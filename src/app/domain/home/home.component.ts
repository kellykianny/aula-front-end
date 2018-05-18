import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dtTrigger: Subject<Product> = new Subject();
  selectedIndex: number;
  products: Product[];
  productLocalStorage: Product[];

  constructor(
    private router: Router,
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.findAll();
  }

  enviandoAoCarrinho(produto) {
    //Cria um array de produtos, buscando do localStorage (se for null ou undefined, cria um array vazio)
    let produtos = localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];
    
    //Adiciona o produto ao array
    produtos.push(produto);

    //Envia o array para o localStorage
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }

  findAll() {
    this.productService.findAll()
      .subscribe(products => {
        this.products = products;
      });
  }
}
