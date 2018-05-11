import { Component, OnInit } from '@angular/core';

import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
  })
  export class CategoryListComponent implements OnInit {

    categories: Category[];

    constructor(
      private categoryService: CategoryService
    ){}

    ngOnInit() {
      this.categoryService.findAll()
        .subscribe(categories => {
          this.categories = categories
        });
    }

    delete(id: number, index: number){
      this.categoryService.delete(id)
        .subscribe(response=>{
          if(response == true){
            this.categories.splice(index, 1);
          }
        });
    }

  }