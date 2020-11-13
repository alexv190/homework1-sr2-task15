import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2component2Component } from './m2component2.component';

describe('M2component2Component', () => {
  let component: M2component2Component;
  let fixture: ComponentFixture<M2component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2component2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M2component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
