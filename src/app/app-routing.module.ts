import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenderAddressComponent } from './features/sender-address/sender-address.component';
import { ReceiverAddressComponent } from './features/receiver-address/receiver-address.component';
import { WeightShippingComponent } from './features/weight-shipping/weight-shipping.component';
import { ShippingOptionsComponent } from './features/shipping-options/shipping-options.component';
import { ShippingConfirmComponent } from './features/shipping-confirm/shipping-confirm.component';
import { ShippingLabelComponent } from './features/shipping-label/shipping-label.component';

const routes: Routes = [
  {path:'', component: SenderAddressComponent},
  {path:'sender', component: SenderAddressComponent},
  {path:'receiver', component: ReceiverAddressComponent},
  {path:'weight', component: WeightShippingComponent},
  {path:'options', component: ShippingOptionsComponent},
  {path:'confirm', component: ShippingConfirmComponent},
  {path:'complete', component: ShippingLabelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
