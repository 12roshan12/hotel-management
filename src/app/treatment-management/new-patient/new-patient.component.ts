import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  dataSubmitted:boolean = true

  constructor(){

  }

  ngOnInit(): void {

  }

}