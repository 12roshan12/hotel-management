import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup = new FormGroup({})

  constructor(private service: AuthenticationService, private fb: FormBuilder, private tosatr: ToastrService, private router: Router) {

  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    let result = this.service.check(this.signInForm.value)
    console.log(result);
    if (result.error) {
      this.tosatr.error('User not found. Please sign-up and try again.')
    }
    else {
      this.tosatr.success('Login Successfully')
      sessionStorage.setItem('logged-user', JSON.stringify(result))
      sessionStorage.setItem('token', '12345')
      this.router.navigate(['/main'])
    }

  }

}
