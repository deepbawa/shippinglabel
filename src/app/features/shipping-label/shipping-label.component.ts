import { Component, OnInit, Input } from '@angular/core';
import { GlobalServiceService } from 'src/app/shared/global-service.service';

@Component({
  selector: 'app-shipping-label',
  templateUrl: './shipping-label.component.html',
  styleUrls: ['./shipping-label.component.scss']
})
export class ShippingLabelComponent implements OnInit {
// @Input() wizardContext: any;
  constructor(private globalServiceService: GlobalServiceService) { }
  shippingLabelData: any = [];
  ngOnInit() {
    const data = this.globalServiceService.getData();
    this.shippingLabelData.push(data);
  }
}
