import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid9Component } from './grid9.component';

describe('Grid9Component', () => {
  let component: Grid9Component;
  let fixture: ComponentFixture<Grid9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
