import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
    
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'category', loadChildren: 'app/domain/category/category.module#CategoryModule'},
    {path: 'product', loadChildren: 'app/domain/product/product.module#ProductModule'}
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