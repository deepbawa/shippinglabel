import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShippingLabelComponent } from './features/shipping-label/shipping-label.component';
import { SenderAddressComponent } from './features/sender-address/sender-address.component';
import { ReceiverAddressComponent } from './features/receiver-address/receiver-address.component';
import { WeightShippingComponent } from './features/weight-shipping/weight-shipping.component';
import { ShippingOptionsComponent } from './features/shipping-options/shipping-options.component';
import { ShippingConfirmComponent } from './features/shipping-confirm/shipping-confirm.component';
import { SharedModule } from './shared/shared.module';
import { GlobalServiceService } from './shared/global-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ShippingLabelComponent,
    SenderAddressComponent,
    ReceiverAddressComponent,
    WeightShippingComponent,
    ShippingOptionsComponent,
    ShippingConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [GlobalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
