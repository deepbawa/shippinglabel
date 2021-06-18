import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingLabelComponent } from './shipping-label.component';
import { GlobalServiceService } from 'src/app/shared/global-service.service';

describe('ShippingLabelComponent', () => {
  let component: ShippingLabelComponent;
  let fixture: ComponentFixture<ShippingLabelComponent>;

  beforeEach(async(() => {
    class MockService {
       getData() {
          return {
            from: {
              name: ''
            }
          }
        }
        setData: () => {
 
        }
    }
    TestBed.configureTestingModule({
      declarations: [ ShippingLabelComponent ],
      providers: [
        {provide: GlobalServiceService, useClass: MockService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingLabelComponent);
    const service = fixture.debugElement.injector.get(GlobalServiceService);
    spyOn(service, 'getData').and.returnValue({from: {name: 'john'}});
    component = fixture.componentInstance;
   //  component.shippingLabelData = [];
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
