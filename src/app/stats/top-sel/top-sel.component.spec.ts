import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSelComponent } from './top-sel.component';

describe('TopSelComponent', () => {
  let component: TopSelComponent;
  let fixture: ComponentFixture<TopSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
