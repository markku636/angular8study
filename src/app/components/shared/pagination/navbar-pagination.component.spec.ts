import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPaginationComponent } from './navbar-pagination.component';

describe('NavbarPaginationComponent', () => {
  let component: NavbarPaginationComponent;
  let fixture: ComponentFixture<NavbarPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
