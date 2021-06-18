import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/shared/global-service.service';

@Component({
  selector: 'app-shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss']
})
export class ShippingOptionsComponent implements OnInit {
  incompleteForm: any;

  constructor(private globalServiceService : GlobalServiceService) { }
  shippingVal: string;
  ngOnInit() {
    this.globalServiceService.getMessage().subscribe((data) => {
       if(data.text === 'options') {
         if(this.shippingVal == '' || this.shippingVal == null) {
          this.incompleteForm = true;
         }
         else {
          this.incompleteForm = false;
         }
        this.incompleteForm ? this.globalServiceService.setErrorMsg('please fill all fields') :
         this.globalServiceService.setData(this.shippingVal, 'shippingOption');
       }
       }
    )}
  selectVal() {
  }
}
