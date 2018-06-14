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

    // criando um array de itens.
    let item = {
      produto: produto,
      index: produtos.length + 1,
      quantidade: 1
    }

    // Criando uma variável para o item que não existe no carrinho.
    var itemNaoExistenteNaListaDeProdutos = true;

    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].produto.id == item.produto.id) {
        produtos[i].produto.preco = produtos[i].produto.preco + item.produto.preco;
        produtos[i].quantidade = produtos[i].quantidade + 1;
        localStorage.setItem("produtos", JSON.stringify(produtos));

        // Item existente no carrinho, então ele recebe falso.
        itemNaoExistenteNaListaDeProdutos = false;
      }
    }

    // Caso o item não exista no carrinho, o item será inserido.
    if (itemNaoExistenteNaListaDeProdutos) {
      produtos.push(item);
      localStorage.setItem("produtos", JSON.stringify(produtos));
    }
    
    // Chamando função que atualiza o número no menu superior
    this.appComponent.atualizaNumero();
  }

  findAll() {
    this.productService.findAll()
      .subscribe(products => {
        this.products = products;
      });
  }
}
