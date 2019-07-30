import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prefetch1Component } from './prefetch1.component';

describe('Prefetch1Component', () => {
  let component: Prefetch1Component;
  let fixture: ComponentFixture<Prefetch1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prefetch1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prefetch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
