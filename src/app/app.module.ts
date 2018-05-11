import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {AppRoutingModule} from './app.routes';

import {CarrinhoComponent} from './domain/carrinho/carrinho.component';
import {CarrinhoService} from './domain/carrinho/carrinho.service';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
