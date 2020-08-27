import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid7Component } from './grid7.component';

describe('Grid7Component', () => {
  let component: Grid7Component;
  let fixture: ComponentFixture<Grid7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
