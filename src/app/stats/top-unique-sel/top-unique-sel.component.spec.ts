import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUniqueSelComponent } from './top-unique-sel.component';

describe('TopUniqueSelComponent', () => {
  let component: TopUniqueSelComponent;
  let fixture: ComponentFixture<TopUniqueSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopUniqueSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUniqueSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
