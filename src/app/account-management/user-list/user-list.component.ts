import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  collection: any[] = []
  p = 1
  
  ngOnInit(): void {

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

}
