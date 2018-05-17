import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {AppRoutingModule} from './app.routes';

import {CarrinhoComponent} from './domain/carrinho/carrinho.component';
import {CarrinhoService} from './domain/carrinho/carrinho.service';
import { HomeComponent } from './domain/home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './domain/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CarrinhoService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
