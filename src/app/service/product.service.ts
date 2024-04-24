import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../models/product.models';

@Injectable({
    providedIn: 'root'
  })
export class ProductService {
    private apiUrl = 'http://localhost:3000';
    product: Product[] = [];
  
    constructor(private http: HttpClient) {
    }
  
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl + '/index');
    
    }
  
  
    getProductById(product_id: number): Observable<Product> {
      return this.http.get<Product>(`${this.apiUrl}/product/${product_id}`);
    }
}

