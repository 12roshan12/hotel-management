import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-management',
  templateUrl: './report-management.component.html',
  styleUrls: ['./report-management.component.scss']
})
export class ReportManagementComponent implements OnInit {
  collection: any[] = []
  p = 1
  composeMessage = false
  dataSubmitted = false
  PreviewMessage = false
  ngOnInit(): void {

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
}