import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggerSectionComponent } from './bigger-section.component';

describe('BiggerSectionComponent', () => {
  let component: BiggerSectionComponent;
  let fixture: ComponentFixture<BiggerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiggerSectionComponent]
    });
    fixture = TestBed.createComponent(BiggerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
