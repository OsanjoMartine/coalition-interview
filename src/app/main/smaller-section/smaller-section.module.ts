import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallerSectionComponent } from './smaller-section.component';
import { LabResultsComponent } from './lab-results/lab-results.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';



@NgModule({
  declarations: [
    SmallerSectionComponent,
    LabResultsComponent,
    PatientInformationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmallerSectionComponent
  ]
})
export class SmallerSectionModule { }
