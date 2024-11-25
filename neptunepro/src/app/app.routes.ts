import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MotorComponent } from './motor/motor.component';
import { OthermotorsComponent } from './othermotors/othermotors.component';
import { OtherproductsComponent } from './otherproducts/otherproducts.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'motor', component: MotorComponent },
    { path: 'otherproducts', component: OtherproductsComponent },
    { path: 'othermotors', component: OthermotorsComponent }
];
