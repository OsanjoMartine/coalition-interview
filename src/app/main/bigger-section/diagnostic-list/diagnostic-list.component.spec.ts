import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticListComponent } from './diagnostic-list.component';

describe('DiagnosticListComponent', () => {
  let component: DiagnosticListComponent;
  let fixture: ComponentFixture<DiagnosticListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosticListComponent]
    });
    fixture = TestBed.createComponent(DiagnosticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
