import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { AppComponent } from '../../app.component';
import { CarrinhoService } from './carrinho.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cupom } from './cupom';
import { ToastrService } from '../../toastr.service'

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  nome: string[] = [];
  aux: string;
  valorTotal: Number = 0;
  cupomForm: FormGroup;

<<<<<<< HEAD
  constructor(
    public appComponent: AppComponent,
    private carrinhoService: CarrinhoService,
    private builder: FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.cupomForm = this.builder.group({
      id: [],
      name: ['', [Validators.maxLength(10)]],
    }, {})
=======
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
>>>>>>> c41b6de1be4a4eadc6ea0d18896b6ec5b88f44d7

    this.lista();
    this.precoTotal();
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
<<<<<<< HEAD
    this.precoTotal();
  }

  atualizandoItem(produto, valor) {
=======
    this.valorTotal();
  }

  atualizarItem(produto, valor) {
>>>>>>> c41b6de1be4a4eadc6ea0d18896b6ec5b88f44d7
    let produtos = localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];

    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].produto.id == produto.id) {
        if (produtos[i].quantidade > 1 || valor == 1) {
          if (valor == 0) {
            produtos[i].produto.preco = produtos[i].produto.preco - (produtos[i].produto.preco / produtos[i].quantidade);
            produtos[i].quantidade = produtos[i].quantidade - 1;
<<<<<<< HEAD
          } else {
=======
          }
          else {
>>>>>>> c41b6de1be4a4eadc6ea0d18896b6ec5b88f44d7
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
<<<<<<< HEAD
    this.precoTotal();
  }

  precoTotal() {
    let produtos = localStorage.getItem("produtos") ?
    JSON.parse(localStorage.getItem("produtos")) :
    [];
    
    let valorTotalAux = 0;
    
    for (let i = 0; i < produtos.length; i++) {
      valorTotalAux = valorTotalAux + produtos[i].produto.preco;
    }
    
    if(localStorage.getItem('desconto') != null) {
      let desconto = parseInt(localStorage.getItem('desconto'));
      valorTotalAux = valorTotalAux - (valorTotalAux * desconto/100); 
      console.log('desconto armazenado: ' + localStorage.getItem('desconto'));
    }

    this.valorTotal = valorTotalAux;
  }

  codDesconto(nomeCod: Cupom) {
    console.log('cupon: ' + typeof nomeCod.name.toString());

    this.carrinhoService.findCouponByName(nomeCod.name)
    .subscribe( resp => {
      localStorage.setItem('desconto', resp.amount.toString());
      this.precoTotal();
      this.toastrService.Success('Cupom aplicado com sucesso!');
    }, 
    err => {
      this.toastrService.Error('Cupom inválido!');
    })
  }

  limparCodigo() {
    localStorage.removeItem('desconto');
    this.toastrService.Success('Cupom removido com sucesso!');
    this.precoTotal();
=======
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
>>>>>>> c41b6de1be4a4eadc6ea0d18896b6ec5b88f44d7
  }
}
