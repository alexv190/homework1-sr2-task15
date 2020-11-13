import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2component1Component } from './m2component1.component';

describe('M2component1Component', () => {
  let component: M2component1Component;
  let fixture: ComponentFixture<M2component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
