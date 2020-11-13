import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4component5Component } from './m4component5.component';

describe('M4component5Component', () => {
  let component: M4component5Component;
  let fixture: ComponentFixture<M4component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4component5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
