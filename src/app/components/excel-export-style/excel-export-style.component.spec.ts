import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelExportStyleComponent } from './excel-export-style.component';

describe('ExcelExportStyleComponent', () => {
  let component: ExcelExportStyleComponent;
  let fixture: ComponentFixture<ExcelExportStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelExportStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelExportStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
