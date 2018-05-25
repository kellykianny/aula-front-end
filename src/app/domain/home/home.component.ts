import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { AppComponent } from '../../app.component';


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
    public productService: ProductService,
    public appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.findAll();
  }

  enviandoAoCarrinho(produto) {
    let produtos = localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];

    let item = {
      produto: produto,
      index: produtos.length + 1
    }
    
    produtos.push(item);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    this.appComponent.atualizaNumero();
  }

  findAll() {
    this.productService.findAll()
      .subscribe(products => {
        this.products = products;
      });
  }
}
