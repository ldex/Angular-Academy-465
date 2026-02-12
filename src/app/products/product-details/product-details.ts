import { Component, inject, input, InputSignal, Signal } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-details',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  private productService = inject(ProductService)

  id = input.required<number>()
  isLoading = this.productService.isLoading
  errorMessage = this.productService.errorMessage

  product: Signal<Product>

  ngOnInit() {
    this.product = this.productService.getProductById(this.id())
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id())
  }
}
