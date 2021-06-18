import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightShippingComponent } from './weight-shipping.component';

import { FormsModule } from '@angular/forms';
describe('WeightShippingComponent', () => {
  let component: WeightShippingComponent;
  let fixture: ComponentFixture<WeightShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ WeightShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
