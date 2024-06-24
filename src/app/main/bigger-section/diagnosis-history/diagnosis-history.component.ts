import { Component } from '@angular/core';
import { IPatient } from 'src/app/shared/models/Interfaces';
import Chart, { ChartItem } from 'chart.js/auto'
import { MainServiceService } from '../../main-service.service';

@Component({
  selector: 'app-diagnosis-history',
  templateUrl: './diagnosis-history.component.html',
  styleUrls: ['./diagnosis-history.component.scss']
})
export class DiagnosisHistoryComponent {
  patientData!: IPatient;
  
  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {
      this.mainService.patientData.subscribe(data => {
        this.patientData =  data.filter(elem=> elem.name == "Jessica Taylor")[0];
        setTimeout(() => this.setUpGraph(), 2000);
        this.patientData.diagnosis_history[0].respiratory_rate.value
      });

  }

  setUpGraph() {
    // const data = this.patientData.diagnosis_history;
    let diastolicLine = this.patientData.diagnosis_history.map(elem => {
      return {time: `${this.truncator(elem.month)}, ${elem.year}`, data: elem.blood_pressure.diastolic.value}
    }).slice(0, 6).reverse();
    let systolicLine = this.patientData.diagnosis_history.map(elem => {
      return {time: `${this.truncator(elem.month)}, ${elem.year}`, data: elem.blood_pressure.systolic.value}
    }).slice(0, 6).reverse();

    let element = document.getElementById('acquisitions');
    console.log(element);
  
    new Chart(
      element as ChartItem,
      {
        type: 'line',
        data: {
          labels: diastolicLine.map(row => row.time),
          datasets: [
            {
              // label: 'Acquisitions by year',
              data: diastolicLine.map(row => row.data),
              cubicInterpolationMode: 'monotone',
              pointRadius: 7,
              backgroundColor: '#8c6fe6',
              borderColor: '#8c6fe6',
            },
            {
              // label: 's',
              data: systolicLine.map(row => row.data),
              cubicInterpolationMode: 'monotone',
              pointRadius: 7,
              backgroundColor: '#e66fd2',
              borderColor: '#e66fd2',
            }
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: 'top',
            },
            title: {
              display: false,
              text: ''
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                lineWidth: 2
              }
            }
          }
        }
      }
    );

    // console.log('this.patientData', this.patientData.diagnosis_history);
    // console.log('grpah systolic', systolicLine);
    // console.log('grpah diastolicLine', diastolicLine);
  }

  truncator(str: string) {
    return str.slice(0, 3);
  }

  imageDecider(str: string) {
    return str.split(' ')[0];
  }
}
