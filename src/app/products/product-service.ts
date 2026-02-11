import { inject, Injectable, Signal, signal } from '@angular/core';
import { Product } from '../models/product';
import { ApiService } from '../api/api-service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiService = inject(ApiService)
  private products = signal<Product[]>([])

  private loadProducts() {
    this.apiService.loadProducts().subscribe({
      next: data => {
        this.products.set(data)
        console.table(data)
      }
    })
  }

  getProducts(): Signal<Product[]> {
    this.loadProducts()
    return this.products.asReadonly()
  }

}
