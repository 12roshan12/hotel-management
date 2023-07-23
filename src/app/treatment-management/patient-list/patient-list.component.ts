import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patientList: any[] = []
  filterPatients: any[] = []
  p = 1

  constructor(private service:AuthenticationService)
  {

  }
  
  ngOnInit(): void {
    this.patientList = this.service.getAllpatients()
    this.filterPatients = this.patientList
  }

  sortData(e: any) {
    if (e.target.value.length == 0 && e.target.value == '') {
      this.filterPatients = this.patientList
      return
    }
    let temp = e.target.value ? e.target.value : e
    this.filterPatients = this.patientList.filter((dat: any) => {
      return dat[`email`]?.toString().toLowerCase().startsWith(temp?.toString().toLowerCase())
    })
  }

}