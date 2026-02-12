import { inject, Injectable, Signal, signal } from '@angular/core';
import { Product } from '../models/product';
import { ApiService } from '../api/api-service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiService = inject(ApiService)
  private products = signal<Product[]>([])

  private loading = signal<boolean>(false)
  readonly isLoading = this.loading.asReadonly()

  private error = signal<string>(undefined)
  readonly errorMessage = this.error.asReadonly()

  private loadProducts() {
    this.loading.set(true)
    this.apiService.loadProducts().subscribe({
      next: data => {
        this.products.set(data)
        console.table(data)
        this.loading.set(false)
      },
      error: (error) => this.handleError(error, 'Failed to load products.')
    })
  }

  getProducts(): Signal<Product[]> {
    if(this.products().length == 0)
      this.loadProducts()
    return this.products.asReadonly()
  }

  private handleError(httpError: HttpErrorResponse, userMessage: string) {
    this.loading.set(false)
    let logMessage: string;
    if (httpError.error instanceof ErrorEvent) {
      logMessage = 'An error occurred:' + httpError.error.message;
    } else {
      logMessage = `Backend returned code ${httpError.status}, body was: ${httpError.error}`;
    }
    console.error(logMessage);
    this.error.set(userMessage);
  }

}
