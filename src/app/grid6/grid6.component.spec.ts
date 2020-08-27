import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid6Component } from './grid6.component';

describe('Grid6Component', () => {
  let component: Grid6Component;
  let fixture: ComponentFixture<Grid6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
