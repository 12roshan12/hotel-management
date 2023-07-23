import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';
import { ConfirmPasswordValidator } from 'src/app/authentication/service/confirmPassword';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  dataSubmitted = false
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

  checkUser() {
    this.signUpForm.markAllAsTouched()
    if (this.signUpForm.invalid) {
      this.toastr.error("Please fill form correctly")
      return
    }
    let result = this.service.returnUser(this.signUpForm.value)
    if (result.error) {
      this.toastr.error('User with this email not found')
    }
    else {
      this.dataSubmitted = true
      this.signUpForm.patchValue(result)
      console.log(this.signUpForm.value);
      
    }
  }

  editUser() {
    console.log(this.signUpForm.value);
    
    this.signUpForm.markAllAsTouched()
    if (this.signUpForm.invalid) {
      this.toastr.error("Please fill form correctly")
      return
    }
    this.service.updateUser(this.signUpForm.value)
    this.toastr.success('User updated successfully')
    this.router.navigate(['/main/account-management'])
  }

}


