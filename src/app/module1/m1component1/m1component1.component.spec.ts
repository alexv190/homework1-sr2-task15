import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M1component1Component } from './m1component1.component';

describe('M1component1Component', () => {
  let component: M1component1Component;
  let fixture: ComponentFixture<M1component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M1component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
