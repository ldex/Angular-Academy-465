import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductDetails } from "../product-details/product-details";
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-list',
  imports: [UpperCasePipe, CurrencyPipe, ProductDetails],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private productService = inject(ProductService)

  title: Signal<string> = signal('Products')
  products: Signal<Product[]> = this.productService.getProducts()
  selectedProduct: WritableSignal<Product> = signal<Product>(undefined)
  isLoading: Signal<boolean> = this.productService.isLoading

  select(product: Product) {
    this.selectedProduct.set(product)
  }
}
