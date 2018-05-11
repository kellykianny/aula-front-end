import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

export const ProductRoutes: Routes = [
    { path: '', redirectTo: '/product/list', pathMatch: 'full' },
    { path: 'list', component: ProductListComponent },
    { path: 'form', component: ProductFormComponent },
    { path: 'alter/:id', component: ProductFormComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(ProductRoutes)
    ],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
