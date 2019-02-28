import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortenComponent } from './morten.component';

describe('MortenComponent', () => {
  let component: MortenComponent;
  let fixture: ComponentFixture<MortenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
