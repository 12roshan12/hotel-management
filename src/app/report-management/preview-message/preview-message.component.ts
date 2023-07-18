import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-message',
  templateUrl: './preview-message.component.html',
  styleUrls: ['./preview-message.component.scss']
})
export class PreviewMessageComponent implements OnInit {
  
  collection: any[] = []
  p = 1
  composeMessage = false
  dataSubmitted = false
  ngOnInit(): void {

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
}
