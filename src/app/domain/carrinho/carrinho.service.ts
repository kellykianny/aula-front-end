import { Injectable, ErrorHandler } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Cupom } from './cupom';


@Injectable()
export class CarrinhoService {

    constructor(private http: Http) { }

    findCouponByName(nomeCupom: string): Observable<Cupom> {
        return this.http
        .get(`http://localhost:8181/api/cupom/${nomeCupom}`)
        .map(response => response.json().content )
    }
}

