import { Component } from '@angular/core';
import { IPatient } from 'src/app/shared/models/Interfaces';
import { MainServiceService } from '../../main-service.service';

@Component({
  selector: 'app-diagnostic-list',
  templateUrl: './diagnostic-list.component.html',
  styleUrls: ['./diagnostic-list.component.scss']
})
export class DiagnosticListComponent {
  patientData!: IPatient;
  
  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {
      this.mainService.patientData.subscribe(data => this.patientData =  data.filter(elem=> elem.name == "Jessica Taylor")[0]);
  }

}
