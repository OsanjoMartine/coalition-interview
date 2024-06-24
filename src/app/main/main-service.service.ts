import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IPatient } from '../shared/models/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('coalition:skills-test')
    })
  };
  patientData: Subject<IPatient[]> = new Subject();

  constructor(private http: HttpClient) { }

  getData() : Observable<any>{
    return this.http
    .get('https://fedskillstest.coalitiontechnologies.workers.dev', this.httpOptions)
    .pipe(data => data);
  }
}
