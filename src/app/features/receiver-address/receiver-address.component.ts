import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/shared/global-service.service';

@Component({
  selector: 'app-receiver-address',
  templateUrl: './receiver-address.component.html',
  styleUrls: ['./receiver-address.component.scss']
})
export class ReceiverAddressComponent implements OnInit {
  incompleteForm: boolean;  
  constructor(
    private globalServiceService: GlobalServiceService
  ) { }
  to: toObj = {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: null
  };
  ngOnInit() {
    this.globalServiceService.getMessage().subscribe((data) => {
      if(data.text === 'receiver')
      for(var i in this.to) {
        if(this.to[i] == '' || this.to[i] == null) {
          this.incompleteForm = true;
        }
        else {
          this.incompleteForm = false;
        }
      }
      this.incompleteForm ? this.globalServiceService.setErrorMsg('please fill all fields') :
      this.globalServiceService.setData(this.to, 'to');
    })
  }

}
export interface toObj {
  name: string,
  street: string,
  city: string,
  state: string,
  zip: number
}
