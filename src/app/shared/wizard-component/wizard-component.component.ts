import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-wizard-component',
  templateUrl: './wizard-component.component.html',
  styleUrls: ['./wizard-component.component.scss']
})
export class WizardComponentComponent implements OnInit {

  currentRoutes: any = ['sender', 'receiver', 'weight',
    'options', 'confirm'];
  currentIndex: number = 0;
  hideComplete = false;
  showErrorMsg = false;

  constructor(
    private router: Router,
    private globalServiceService: GlobalServiceService) { }

  ngOnInit() {
  }

  changeRoute(route) {
    if (route) {
      this.router.navigateByUrl('/' + route);
    }
  }

  Complete() {
    this.hideComplete = true;
    this.router.navigate(['/complete']);
  }
  previous() {
    if (this.currentIndex > 0) {
      this.globalServiceService.saveFormData(this.currentRoutes[this.currentIndex]);
      if (this.globalServiceService.getErrorMsg()) {
        this.showErrorMsg = this.globalServiceService.getErrorMsg();
      } else {
        this.showErrorMsg = false;
        this.globalServiceService.saveFormData(this.currentRoutes[this.currentIndex], this.currentIndex - 1);
        this.currentIndex--;
        this.changeRoute(this.currentRoutes[this.currentIndex]);
      }
    }
  }


  next() {
    if (this.currentIndex < this.currentRoutes.length) {
      this.globalServiceService.saveFormData(this.currentRoutes[this.currentIndex]);
      if (this.globalServiceService.getErrorMsg()) {
        this.showErrorMsg = this.globalServiceService.getErrorMsg();
      } else {
        this.showErrorMsg = false;
        this.globalServiceService.saveFormData(this.currentRoutes[this.currentIndex], this.currentIndex + 1);
        this.currentIndex++;
        this.changeRoute(this.currentRoutes[this.currentIndex]);
      }
    }
  }

}
