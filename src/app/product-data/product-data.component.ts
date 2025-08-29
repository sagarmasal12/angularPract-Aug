import { Component, OnInit } from '@angular/core';
import { Productmodel } from './product.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-data',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css',
})
export class ProductDataComponent implements OnInit {
  productform: FormGroup;
  products: Productmodel[] = [];
  editId = 0;

  constructor(private fb: FormBuilder, private productSrv: ProductService) {
    this.productform = this.fb.group({
      id: [0],
      proname: ['', Validators.required],
      skucode: ['', Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.products = this.productSrv.getFromStorage();
  }

  addProducts() {
    debugger;
    if (this.productform.valid) {
      this.productSrv.addProduct(this.productform.value);
      this.products = this.productSrv.getFromStorage();
      this.productform.reset();
    } else {
      debugger;
      alert('Invalid Form');
    }
  }

  editProduct(product: Productmodel) {
    this.productform.patchValue(product);
    this.editId = product.id;
    console.log(this.editId);
  }
  updateProd() {
    if (this.editId) {
      this.productSrv.updateProd(this.productform.value);
      this.editId = 0;
      this.products = this.productSrv.getFromStorage();
      this.productform.reset();
    }
  }

  onDelete(prod: Productmodel) {
    this.productSrv.delete(prod.id);
    this.products = this.productSrv.getFromStorage();
  }
}
