import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  constructor(private router: Router)
  {

  }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.removeItem('logged-user')
    sessionStorage.removeItem('token')
    this.router.navigate(['/authentication']);
  }

}
