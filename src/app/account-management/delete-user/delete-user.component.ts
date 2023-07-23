import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  dataSubmitted: boolean = false


  deleteForm: FormGroup = new FormGroup({})

  constructor(private router: Router, private service: AuthenticationService, private fb: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.deleteForm = this.fb.group({
      email: ['', Validators.required],
    })
  }

  signUp() {
    this.deleteForm.markAllAsTouched()
    if (this.deleteForm.invalid) {
      this.toastr.error("Please fill form correctly")
      return
    }
    let result = this.service.deleteUser(this.deleteForm.value)
    if (result.error == true) {
      this.toastr.error('User with this email doesnot exist.')
      return
    }
    else{
      this.dataSubmitted = true
    }
  }
}
