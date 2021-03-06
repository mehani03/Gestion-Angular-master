import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { API_URLS } from '../config/api.url.config';
import { Produit } from '../shared/produit';
@Injectable()
export class ProduitService {
    [x: string]: any;
    constructor(private http: HttpClient) {
    }
    getProduit(): Observable<any> {
        return this.http.get(API_URLS.PRODUITS_URL);
    }

    addProduit(produit: Produit): Observable<any> {
        return this.http.post(API_URLS.PRODUITS_URL, produit);

    }

    updateProduit(produit: Produit): Observable<any> {
        return this.http.put(API_URLS.PRODUITS_URL, produit);
    }

    deleteProduit(ref: string): Observable<any> {
        return this.http.delete(API_URLS.PRODUITS_URL + `/${ref}`);
    }

}