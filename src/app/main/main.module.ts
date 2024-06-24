import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section/main-section.component';
import { BiggerSectionModule } from './bigger-section/bigger-section.module';
import { SmallerSectionModule } from './smaller-section/smaller-section.module';

@NgModule({
  declarations: [
    MainSectionComponent,
  ],
  imports: [
    CommonModule,
    BiggerSectionModule,
    SmallerSectionModule
  ],
  exports: [
    MainSectionComponent,
  ]
})
export class MainModule { }
