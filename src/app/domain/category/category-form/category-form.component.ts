import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';

import {Category} from '../category';
import {CategoryService} from '../category.service';

@Component({
    selector: 'category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.css']
  })
  export class CategoryFormComponent implements OnInit {

    formCategory: FormGroup;

    constructor(
      private categoryService: CategoryService,
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute
    ){}

    ngOnInit() {
      
      let category: Category = new Category();
      category.id = this.route.snapshot.params['id'];


      this.formCategory = this.formBuilder.group({
        id: [],
        nome: ['', Validators.required]
      }, {});

      if(category.id != null){
        this.categoryService.findOne(category.id)
          .subscribe(category => {
            this.formCategory.patchValue(category);
          })
      }

    }

    salvar(category: Category){

      this.categoryService.save(category)
        .subscribe(response => {
          
          // redirecionar
          this.router.navigate(['/category']);

        });

    }

  }