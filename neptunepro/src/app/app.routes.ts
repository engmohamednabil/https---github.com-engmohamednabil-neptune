import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/view/product.component';
import { MotorComponent } from './motor/motor.component';
import { OthermotorsComponent } from './othermotors/othermotors.component';
import { AddInitialstepComponent } from './product/add-initialstep/add-initialstep.component';
import { AddFinalstepComponent } from './product/add-finalstep/add-finalstep.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'motor', component: MotorComponent },
    { path: 'add-initialstep', component: AddInitialstepComponent },
    { path: 'add-finalstep', component: AddFinalstepComponent },
    { path: 'othermotors', component: OthermotorsComponent }
];
