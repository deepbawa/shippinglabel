import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponentComponent } from './wizard-component/wizard-component.component';
import { GlobalServiceService } from './global-service.service';
import { WizardHeaderComponent } from './wizard-header/wizard-header.component';



@NgModule({
  declarations: [WizardComponentComponent, WizardHeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    WizardComponentComponent,
    WizardHeaderComponent,
  ],
  providers: [GlobalServiceService],

})
export class SharedModule { }
