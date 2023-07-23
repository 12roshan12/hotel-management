import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';

@Component({
  selector: 'app-discharge-patient',
  templateUrl: './discharge-patient.component.html',
  styleUrls: ['./discharge-patient.component.scss']
})
export class DischargePatientComponent implements OnInit {
  dataSubmitted = false
  signUpForm: FormGroup = new FormGroup({})

  constructor(private router: Router, private service: AuthenticationService, private fb: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: ['', Validators.required],
      patient_status: [''],
      admission_date: [''],
      ward: [{ value: '', disabled: true }],
      id: [''],
      bed_number: [''],
      phone: [''],
      reason_for_admission: [''],
      patient_address: [''],
      emergency_contact: ['']
    })
  }

  checkUser() {
    this.signUpForm.markAllAsTouched()
    if (this.signUpForm.invalid) {
      this.toastr.error("Please fill form correctly")
      return
    }
    let result = this.service.returnpatients(this.signUpForm.value)
    if (result.error) {
      this.toastr.error('Patient with this email not found')
    }
    else {
      this.signUpForm.patchValue(result)
      this.signUpForm.get('patient_status')?.setValue('	Soon To Be Discharged')
      console.log(this.signUpForm.value);
      this.dataSubmitted = true
    }
  }

  editUser() {
    console.log(this.signUpForm.value);

    this.signUpForm.markAllAsTouched()
    if (this.signUpForm.invalid) {
      this.toastr.error("Please fill form correctly")
      return
    }
    this.service.updatepatients(this.signUpForm.value)
    this.toastr.success('Patient discharged successfully')
    this.router.navigate(['/main/treatment-management/patient-profile'])
  }


}

