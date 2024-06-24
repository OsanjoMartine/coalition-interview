import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../../main-service.service';
import { IPatient } from 'src/app/shared/models/Interfaces';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent implements OnInit {
  patientData!: IPatient;
  
  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {
      this.mainService.patientData.subscribe(data => this.patientData =  data.filter(elem=> elem.name == "Jessica Taylor")[0]);
  }
}
