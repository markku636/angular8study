import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImportModuleComponent } from './dynamic-import-module.component';

describe('DynamicImportModuleComponent', () => {
  let component: DynamicImportModuleComponent;
  let fixture: ComponentFixture<DynamicImportModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicImportModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicImportModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
