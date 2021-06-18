import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderAddressComponent } from './sender-address.component';

import { FormsModule } from '@angular/forms';
import { GlobalServiceService } from 'src/app/shared/global-service.service';
describe('SenderAddressComponent', () => {
  let component: SenderAddressComponent;
  let fixture: ComponentFixture<SenderAddressComponent>;

  beforeEach(async(() => {
    class MockGlobalService {
      getData() {
         return {
           from: {
             
           }
         }
       };
       setData: () => {

       }
   }
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SenderAddressComponent ],      
      providers: [
        {provide: GlobalServiceService, useClass: MockGlobalService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderAddressComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
