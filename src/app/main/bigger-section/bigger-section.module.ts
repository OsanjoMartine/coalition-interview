import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiggerSectionComponent } from './bigger-section.component';
import { DiagnosisHistoryComponent } from './diagnosis-history/diagnosis-history.component';
import { DiagnosticListComponent } from './diagnostic-list/diagnostic-list.component';



@NgModule({
  declarations: [
    BiggerSectionComponent,
    DiagnosisHistoryComponent,
    DiagnosticListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BiggerSectionComponent
  ]
})
export class BiggerSectionModule { }
