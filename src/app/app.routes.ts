import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './domain/home/home.component';
import { CarrinhoComponent } from './domain/carrinho/carrinho.component';

const appRoutes: Routes = [

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'category', loadChildren: 'app/domain/category/category.module#CategoryModule' },
  { path: 'product', loadChildren: 'app/domain/product/product.module#ProductModule' },
  { path: 'home', component: HomeComponent },
  { path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }