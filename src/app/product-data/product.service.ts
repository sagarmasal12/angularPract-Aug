import { Injectable, OnInit } from '@angular/core';
import { Productmodel } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
  private product: Productmodel[] = [];
  constructor() {}

  ngOnInit(): void {}

  saveToStorage() {
    localStorage.setItem('myproduct', JSON.stringify(this.product));
  }

  getFromStorage(): Productmodel[] {
    let temp = localStorage.getItem('myproduct');
    if (temp) {
      this.product = JSON.parse(temp);
      return this.product;
    }
    return [];
  }

  addProduct(obj: Productmodel) {
    let newId =
      this.product.length > 0
        ? Math.max(...this.product.map((s) => s.id ?? 0)) + 1
        : 1;

    obj.id = newId;
    this.product.push(obj);
    this.saveToStorage();
  }
}
