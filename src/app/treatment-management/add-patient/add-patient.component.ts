import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  dataSubmitted:boolean = false

  constructor(){

  }

  ngOnInit(): void {

  }

}