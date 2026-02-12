import { Component, input, InputSignal } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  product: InputSignal<Product> = input<Product>()

}
