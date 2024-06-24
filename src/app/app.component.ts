import { Component, OnInit } from '@angular/core';
import { MainServiceService } from './main/main-service.service';
import { IPatient } from './shared/models/Interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'coalition-interview';
  data: IPatient[] = [];

  constructor(private mainService: MainServiceService) {}

  ngOnInit() {
    // setTimeout(() => this.getData(), 5000);
    this.getData()
  }

  getData() {
    this.mainService.getData().subscribe((response) => {
      this.data = response;
      this.mainService.patientData.next(response);
      console.log('app', response)
    });
  }
}
