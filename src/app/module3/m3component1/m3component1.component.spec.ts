import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3component1Component } from './m3component1.component';

describe('M3component1Component', () => {
  let component: M3component1Component;
  let fixture: ComponentFixture<M3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
