import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimetableAddComponent } from './timetable-add.component';

describe('TimetableAddComponent', () => {
  let component: TimetableAddComponent;
  let fixture: ComponentFixture<TimetableAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
