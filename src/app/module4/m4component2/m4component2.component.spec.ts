import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4component2Component } from './m4component2.component';

describe('M4component2Component', () => {
  let component: M4component2Component;
  let fixture: ComponentFixture<M4component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4component2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
