import { Injectable } from '@angular/core';
import {Http, Headers, HttpModule, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

import {Category} from './category';

@Injectable()
export class CategoryService{

    public API_URL: string = 'http://localhost:8181/api';
    
    constructor(public http : Http){}

    findAll(): Observable<Category[]>{
        return this.http
            .get(`${this.API_URL}/category`)
            .map(res => res.json().content);
    }

    findOne(id:number): Observable<Category[]>{
        return this.http
            .get(`${this.API_URL}/category/${id}`)
            .map(res => res.json().content);
    }

    delete(id: number): Observable<boolean>{
        return this.http
            .delete(`${this.API_URL}/category/${id}`)
            .map(res => res.json().content);
    }

    save(category: Category): Observable<Category>{

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        if(category.id){
            return this.http
                .put(`${this.API_URL}/category/`, JSON.stringify(category), options)
                .map(res => res.json().content);
        } else {
            return this.http
                .post(`${this.API_URL}/category/`, JSON.stringify(category), options)
                .map(res => res.json().content);
        }

    }


}








