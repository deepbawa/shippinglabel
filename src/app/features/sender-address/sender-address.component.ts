import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/shared/global-service.service';

@Component({
  selector: 'app-sender-address',
  templateUrl: './sender-address.component.html',
  styleUrls: ['./sender-address.component.scss']
})
export class SenderAddressComponent implements OnInit {

  constructor(
    private globalServiceService: GlobalServiceService
  ) { }
  from: fromObj = {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: null
  };
  incompleteForm =false;
  ngOnInit() {
    this.globalServiceService.getMessage().subscribe((data) => {
      if(data.text === 'sender') 
      for(var i in this.from) {
        if(this.from[i] == '' || this.from[i] == null) {
          this.incompleteForm = true;
        }
        else {
          this.incompleteForm = false;
        }
      }
      this.incompleteForm ? this.globalServiceService.setErrorMsg('please fill all fields') :
      this.globalServiceService.setData(this.from, 'from');
    })
  }

}
export interface fromObj {
  name: string,
  street: string,
  city: string,
  state: string,
  zip: number

}
