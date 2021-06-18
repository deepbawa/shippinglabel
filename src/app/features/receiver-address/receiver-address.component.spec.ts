import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverAddressComponent } from './receiver-address.component';

import { FormsModule } from '@angular/forms';
import { GlobalServiceService } from 'src/app/shared/global-service.service';
describe('ReceiverAddressComponent', () => {
  let component: ReceiverAddressComponent;
  let fixture: ComponentFixture<ReceiverAddressComponent>;

  beforeEach(async(() => {
    
    class MockGlobalService {
      getData() {
         return {
           from: {
             
           }
         }
       };
       setData: () => {

       };
       getMessage: () => {

      }
   }
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ReceiverAddressComponent ],
      providers: [
        {provide: GlobalServiceService, useClass: MockGlobalService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverAddressComponent);
    component = fixture.componentInstance;
    //// fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
