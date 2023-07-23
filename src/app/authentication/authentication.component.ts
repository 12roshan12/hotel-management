import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private service: AuthenticationService) {

  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('user')) {
      this.service.getJSON().subscribe((data: any) => {
        sessionStorage.setItem('user', JSON.stringify(data.user))
      })
    }
  }
}
