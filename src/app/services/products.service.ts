import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ipAddress = 'http://127.0.0.1:3000';

  constructor(
    private http: HttpClient,
  ) { }

  getProductByID(id) {
    return this.http.get(`${this.ipAddress}/product/${id}`);
  }

  getProducts() {
    return this.http.get(`${this.ipAddress}/product/all`);
  }
}
