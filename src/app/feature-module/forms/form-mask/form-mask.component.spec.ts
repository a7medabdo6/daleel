import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormMaskComponent } from './form-mask.component';

describe('FormMaskComponent', () => {
  let component: FormMaskComponent;
  let fixture: ComponentFixture<FormMaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
