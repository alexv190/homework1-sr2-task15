import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3component2Component } from './m3component2.component';

describe('M3component2Component', () => {
  let component: M3component2Component;
  let fixture: ComponentFixture<M3component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3component2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
