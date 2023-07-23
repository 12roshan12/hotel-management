import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmPasswordValidator } from '../service/confirmPassword';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({})

  constructor(private router: Router, private service: AuthenticationService, private fb: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      dob: ['', Validators.required],
      id: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      designation: [''],
      dutyType: [''],
      ward: [''],
      role: ['']
    },

      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      })
  }

  signin() {
    this.signUpForm.markAllAsTouched()
    if (this.signUpForm.invalid) {
      this.toastr.error("Please fill form correctly")
      return
    }
    let result = this.service.setUser(this.signUpForm.value)
    // sessionStorage.setItem('currentlyLoggedInUser', this.signUpForm.value)
    if (result.error == true) {
      this.toastr.error('User with this email already exists. Please login.')
      return
    }

    this.toastr.success('Sign Up Success.Please proceed to login')
    setTimeout(() => {
      this.signUpForm.reset()
      this.router.navigate(['/authentication/sign-in'])
    }, 500);

  }

}
