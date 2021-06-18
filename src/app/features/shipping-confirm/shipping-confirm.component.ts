import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/shared/global-service.service';

@Component({
  selector: 'app-shipping-confirm',
  templateUrl: './shipping-confirm.component.html',
  styleUrls: ['./shipping-confirm.component.scss']
})
export class ShippingConfirmComponent implements OnInit {

  constructor(private globalServiceService: GlobalServiceService) { }
  ShippingOption = {
    Ground: 1,
    Priority: 2
  }
  data: object = {};
  ngOnInit() {
    this.data = this.globalServiceService.getData();
    const shippingRate = 0.40;
    const shippingCost = this.data['weight'] * shippingRate *
      (this.data['shippingOption'] === this.ShippingOption['Ground'] ? 1 : 1.5);
    this.data['shippingCost'] = shippingCost.toFixed(2);
    this.globalServiceService.setData(this.data);
  }
}
