import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const CategoryRoutes: Routes = [
    {path: '', component: CategoryListComponent},
    {path: 'form', component: CategoryFormComponent},
    {path: 'form/:id', component: CategoryFormComponent},
]; 

@NgModule({
    imports: [RouterModule.forChild(CategoryRoutes)],
    exports: [RouterModule]
  })
  
export class CategoryRouting {}

