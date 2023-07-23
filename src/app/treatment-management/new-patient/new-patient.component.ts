import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  dataSubmitted: boolean = false


  signUpForm: FormGroup = new FormGroup({})

  constructor(private router: Router, private service: AuthenticationService, private fb: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      patient_status: [''],
      admission_date: ['', Validators.required],
      ward: ['', Validators.required],
      bed_number: ['', Validators.required],
      phone: ['', Validators.required],
      reason_for_admission: ['', Validators.required],
      patient_address: ['', Validators.required],
      emergency_contact: ['', Validators.required]
    })
  }

  signUp() {
    this.signUpForm.markAllAsTouched()
    if (this.signUpForm.invalid) {
      this.toastr.error("Please fill form correctly")
      return
    }
    let result = this.service.setpatients(this.signUpForm.value)
    if (result.error == true) {
      this.toastr.error('Patient with this email already exists.')
      return
    }
    else {
      this.toastr.success('Patient profile created')
      this.router.navigate(['/main/treatment-management/patient-profile'])
    }
  }

}