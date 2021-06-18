import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOptionsComponent } from './shipping-options.component';

import { FormsModule } from '@angular/forms';
describe('ShippingOptionsComponent', () => {
  let component: ShippingOptionsComponent;
  let fixture: ComponentFixture<ShippingOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ShippingOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
