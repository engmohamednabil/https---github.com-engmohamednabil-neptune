import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductStore } from './../product.store';

@Component({
  selector: 'app-add-initialstep',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-initialstep.component.html',
  styleUrl: './add-initialstep.component.scss'
})
export class AddInitialstepComponent {

  product: IProduct = { ProductName: '', VersionCode : 0 , SalesCode: 0, RequireApprovals: false };

  constructor(private router: Router, private productStore: ProductStore) {}

  nextStep() {
    this.productStore.setProduct(this.product);
    this.router.navigate(['/add-finalstep']);
  }

}
