import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

// Component
import {CategoryListComponent} from './category-list/category-list.component'
import {CategoryFormComponent} from './category-form/category-form.component'

//routing 
import {CategoryRouting} from './category-routing.module';

//Service
import {CategoryService} from './category.service';

@NgModule({
    declarations: [
        //Componentes
        CategoryListComponent,
        CategoryFormComponent

    ],
    imports: [
      // angular
      HttpModule,
      RouterModule,
      CommonModule,

      // form
      FormsModule,
      ReactiveFormsModule,

      // Routing
      CategoryRouting
    ],
    
    providers: [
      // services
      CategoryService
    ]
  })
  export class CategoryModule { }