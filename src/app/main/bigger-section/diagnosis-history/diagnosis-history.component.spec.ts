import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisHistoryComponent } from './diagnosis-history.component';

describe('DiagnosisHistoryComponent', () => {
  let component: DiagnosisHistoryComponent;
  let fixture: ComponentFixture<DiagnosisHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisHistoryComponent]
    });
    fixture = TestBed.createComponent(DiagnosisHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
