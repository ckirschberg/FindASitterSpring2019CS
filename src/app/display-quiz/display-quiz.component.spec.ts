import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuizComponent } from './display-quiz.component';

describe('DisplayQuizComponent', () => {
  let component: DisplayQuizComponent;
  let fixture: ComponentFixture<DisplayQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
