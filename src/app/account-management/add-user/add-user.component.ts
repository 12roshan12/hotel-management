import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';
import { ConfirmPasswordValidator } from 'src/app/authentication/service/confirmPassword';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  dataSubmitted: boolean = false


  signUpForm: FormGroup = new FormGroup({})

  constructor(private router: Router, private service: AuthenticationService, private fb: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.required],
      mobileNumber: [''],
      dob: [''],
      id: [''],
      gender: [''],
      password: [''],
      confirmPassword: [''],
      designation: [''],
      dutyType: [''],
      ward: [''],
      role: [''],
    },

      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      })
  }

  signUp() {
    this.signUpForm.markAllAsTouched()
    if (this.signUpForm.invalid) {
      this.toastr.error("Please fill form correctly")
      return
    }
    let result = this.service.setUser(this.signUpForm.value)
    if (result.error == true) {
      this.toastr.error('User with this email already exists.')
      return
    }
    else{
      this.toastr.success('User added succesfully.')
      this.router.navigate(['/main/account-management'])
     
    }
  }
}
