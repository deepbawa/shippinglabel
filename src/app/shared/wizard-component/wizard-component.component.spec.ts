import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardComponentComponent } from './wizard-component.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalServiceService } from '../global-service.service';
import { Router } from '@angular/router';
describe('WizardComponentComponent', () => {
  let component: WizardComponentComponent;
  let fixture: ComponentFixture<WizardComponentComponent>;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [WizardComponentComponent],
      providers: [
        {
          provide: GlobalServiceService, useValue: {
            saveFormData: () => {

            },
            getErrorMsg: () => {

            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(WizardComponentComponent);

    router = fixture.debugElement.injector.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(' should move wizard forward', () => {
    const index = component.currentIndex;
    component.next();
    expect(component.currentIndex).toEqual(index + 1);
    expect(component.showErrorMsg).toEqual(false);
  });
  it(' should move wizard backward', () => {
    component.currentIndex = 1;
    component.previous();
    expect(component.currentIndex).toEqual(0);
    expect(component.showErrorMsg).toEqual(false);
  });
  it(' should route to complete and show complete information', () => {
    let navigateSpy = spyOn(router, 'navigate');
    component.currentIndex = 1;
    component.Complete();
    expect(component.hideComplete).toEqual(true);
    expect(navigateSpy).toHaveBeenCalledWith(['/complete']);
  });
});
