import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TransportComponent } from './transport.component';

describe('TransportComponent', () => {
  let component: TransportComponent;
  let fixture: ComponentFixture<TransportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
