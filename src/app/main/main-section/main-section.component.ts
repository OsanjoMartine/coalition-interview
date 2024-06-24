import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  constructor(private mainService: MainServiceService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.mainService.getData().subscribe((response) => {
      // console.log(response);
    });
  }

}
