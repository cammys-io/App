import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductFake } from '../app.interfaces';
@Injectable({
  providedIn: 'root',
})
export class FakestoreService {
  private _http = inject(HttpClient);
  constructor() {}
  getProducts() {
    return this._http.get<ProductFake[]>('https://fakestoreapi.com/products');
  }
  getProduct(id: string) {
    return this._http.get<ProductFake>(`https://fakestoreapi.com/products/${id}`);
  }
}
