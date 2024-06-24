import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallerSectionComponent } from './smaller-section.component';

describe('SmallerSectionComponent', () => {
  let component: SmallerSectionComponent;
  let fixture: ComponentFixture<SmallerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallerSectionComponent]
    });
    fixture = TestBed.createComponent(SmallerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
