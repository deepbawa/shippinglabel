import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingConfirmComponent } from './shipping-confirm.component';
import { GlobalServiceService } from 'src/app/shared/global-service.service';

describe('ShippingConfirmComponent', () => {
  let component: ShippingConfirmComponent;
  let fixture: ComponentFixture<ShippingConfirmComponent>;

  beforeEach(async(() => {    
    class MockGlobalService {
      getData() {
         return {
           from: {
             
           },
           weight: 1,
           shippingOption: 2
         }
       };
       setData(){

       }
   }
    TestBed.configureTestingModule({
      declarations: [ ShippingConfirmComponent ],
      providers: [
        {provide: GlobalServiceService, useClass: MockGlobalService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("should update shipping cost based on shippingOption", () => {
    expect(component.data['shippingCost']).toBe('0.60');
  });
});
