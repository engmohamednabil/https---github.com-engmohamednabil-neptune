import { Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductStore {

  private productSignal = signal<IProduct | null>(null);

  readonly product = this.productSignal.asReadonly();

  setProduct(product: IProduct) {
    this.productSignal.set(product);
  }

  removeProduct() {
    this.productSignal.set(null);
  }
}