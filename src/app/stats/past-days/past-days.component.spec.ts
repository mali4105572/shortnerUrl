import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDaysComponent } from './past-days.component';

describe('PastDaysComponent', () => {
  let component: PastDaysComponent;
  let fixture: ComponentFixture<PastDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
