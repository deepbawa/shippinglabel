import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-wizard-header',
  templateUrl: './wizard-header.component.html',
  styleUrls: ['./wizard-header.component.scss']
})
export class WizardHeaderComponent implements OnInit {

  constructor(private globalServiceService: GlobalServiceService) { }
  index: number = 0;
  ngOnInit() {
    // this.index = 20;
    this.globalServiceService.getMessage().subscribe((data) => {
      this.index = data.index * 25;
    })
  }

}
