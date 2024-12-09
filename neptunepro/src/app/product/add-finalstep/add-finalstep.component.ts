import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/IProduct';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-finalstep',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-finalstep.component.html',
  styleUrl: './add-finalstep.component.scss'
})
export class AddFinalstepComponent {

  product!: IProduct;
  constructor(private router: Router) {}

  saveAndClose() {  
  let existing = localStorage.getItem('products');
  let products: IProduct[] = [];
  if (existing) {  
    products = JSON.parse(existing);

  if(this.product){
    products.push(this.product); 
    localStorage.setItem('products', JSON.stringify(products));
  }
}
  else{
    products.push(this.product);
    localStorage.setItem('products', JSON.stringify(products));
  }
  localStorage.removeItem('product');  
  this.router.navigate(['/product']);
}

  ngOnInit() {
    const productData = localStorage.getItem('product');
    if (productData) {
      this.product = JSON.parse(productData);
      console.log('titleOnly: '+ productData);
    }
  }
}
