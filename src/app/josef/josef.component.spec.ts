import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JosefComponent } from './josef.component';

describe('JosefComponent', () => {
  let component: JosefComponent;
  let fixture: ComponentFixture<JosefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JosefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JosefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
