import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4component1Component } from './m4component1.component';

describe('M4component1Component', () => {
  let component: M4component1Component;
  let fixture: ComponentFixture<M4component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
