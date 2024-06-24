import { Component } from '@angular/core';
import { MainServiceService } from '../main/main-service.service';
import { IPatient } from '../shared/models/Interfaces';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  data: IPatient[] = [];
  
  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {
      this.mainService.patientData.subscribe(data => this.data =  data);
  }
}
