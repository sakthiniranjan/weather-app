import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid4Component } from './grid4.component';

describe('Grid4Component', () => {
  let component: Grid4Component;
  let fixture: ComponentFixture<Grid4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
