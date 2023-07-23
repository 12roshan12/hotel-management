import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private service: AuthenticationService) {

  }

  collection: any[] = []
  p = 1
  userList: any = []
  filteredUser: any = []


  ngOnInit(): void {

    this.userList = this.service.getAllUser()
    this.filteredUser = this.userList
  }

  sortData(e: any) {
    if (e.target.value.length == 0 && e.target.value == '') {
      this.filteredUser = this.userList
      return
    }
    let temp = e.target.value ? e.target.value : e
    this.filteredUser = this.userList.filter((dat: any) => {
      return dat[`email`]?.toString().toLowerCase().startsWith(temp?.toString().toLowerCase())
    })
  }

}
