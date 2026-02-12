import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe, JsonPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { ProductService } from '../product-service';
import { OrderByPipe } from '../orderBy.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [UpperCasePipe, CurrencyPipe, JsonPipe, OrderByPipe, SlicePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export default class ProductList {
  private productService = inject(ProductService)
  private router = inject(Router)

  title: Signal<string> = signal('Products')
  products: Signal<Product[]> = this.productService.getProducts()
  selectedProduct: WritableSignal<Product> = signal<Product>(undefined)
  isLoading: Signal<boolean> = this.productService.isLoading
  errorMessage: Signal<string> = this.productService.errorMessage

  pageSize = signal(5)
  start = signal(0)
  end = signal(this.pageSize())
  pageNumber = signal(1)

  changePage(increment: number) {
    this.pageNumber.update(pn => pn + increment)
    this.start.update(n => n + increment * this.pageSize())
    this.end.set(this.start() + this.pageSize())
    this.selectedProduct.set(undefined)
  }

  select(product: Product) {
    this.selectedProduct.set(product)
    this.router.navigate(['/products', product.id])
  }
}
