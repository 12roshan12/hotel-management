import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  collection: any[] = []
  p = 1
  
  ngOnInit(): void {

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

}