import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/service/authentication.service';

@Component({
  selector: 'app-treatment-management',
  templateUrl: './treatment-management.component.html',
  styleUrls: ['./treatment-management.component.scss']
})
export class TreatmentManagementComponent implements OnInit {

  constructor(private service:AuthenticationService)
  {

  }


  ngOnInit(): void {
    if (!sessionStorage.getItem('patients')) {
      this.service.getJSON().subscribe((data: any) => {
        sessionStorage.setItem('patients', JSON.stringify(data.patients))
      })
    }
  }

}
