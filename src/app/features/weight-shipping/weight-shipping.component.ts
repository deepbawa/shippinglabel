import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/shared/global-service.service';

@Component({
  selector: 'app-weight-shipping',
  templateUrl: './weight-shipping.component.html',
  styleUrls: ['./weight-shipping.component.scss']
})
export class WeightShippingComponent implements OnInit {
  constructor(
    private globalServiceService: GlobalServiceService
  ) { }
  weight: number;
  ngOnInit() {
    this.globalServiceService.getMessage().subscribe((data) => {
      if (data.text === 'weight')
        this.globalServiceService.setData(this.weight, data.text);
    })
  }
}
