import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser/src/browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';


import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    RouterModule,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  providers: [
    ProductService,
    CategoryService
  ],
})
export class ProductModule { }
