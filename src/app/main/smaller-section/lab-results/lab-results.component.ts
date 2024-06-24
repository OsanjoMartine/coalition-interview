import { Component } from '@angular/core';
import { IPatient } from 'src/app/shared/models/Interfaces';
import { MainServiceService } from '../../main-service.service';

@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrls: ['./lab-results.component.scss']
})
export class LabResultsComponent {
  patientData!: IPatient;
  
  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {
      this.mainService.patientData.subscribe(data => this.patientData =  data.filter(elem=> elem.name == "Jessica Taylor")[0]);
  }
}
