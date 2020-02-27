import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';

import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { Routes, RouterModule } from '@angular/router';

// export const routes: Routes = [
//   { path: '', component: CartComponent },
//   { path: 'checkout', component: CheckoutComponent },
//   { path: 'confirm', component: ConfirmComponent },
// ];
export const routes:Routes=[
{
  path:'',
  component:CartComponent
},
{
  path:'checkout',
  component:CheckoutComponent
},
{
  path:'confirm',
  component:ConfirmComponent
}

];

@NgModule({
  declarations: [CartComponent, CheckoutComponent, ConfirmComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ShopModule { }
