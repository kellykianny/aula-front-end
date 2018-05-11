import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Carrinho} from './carrinho'
import {Product} from '../product/product'

@Injectable()
export class CarrinhoService {

    private carrinhoSubject = new Subject<Carrinho>();
    products: Product[] = [];
    carrinho = this.carrinhoSubject.asObservable();
    
    
    constructor(public http : Http){}

    adicionarProduct(product: Product){
        this.products.push(product);
        this.carrinhoSubject.next(<Carrinho>{ativo: true , products:  this.products});
    }

    removerProduct(id: number){
       this.products =  this.products.filter(  product => product.id !== id);
       this.carrinhoSubject.next(<Carrinho>{ativo: true , products:  this.products});
    }


}