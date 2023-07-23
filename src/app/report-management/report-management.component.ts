import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-management',
  templateUrl: './report-management.component.html',
  styleUrls: ['./report-management.component.scss']
})
export class ReportManagementComponent implements OnInit {
  messageList: any[] = [];
  filteredMessageList: any[] = [];
  userList: any[] = [];
  selectedUser: any
  subject: any
  message: any
  currentUser: any
  selectedMessage: any

  constructor(private service: AuthenticationService, private toastr: ToastrService, private router: Router) {

  }

  collection: any[] = []
  p = 1
  composeMessage = false
  dataSubmitted = false
  PreviewMessage = false
  ngOnInit(): void {

    this.userList = this.service.getAllUser()

    if (!sessionStorage.getItem('message')) {
      this.service.getJSON().subscribe((data: any) => {
        sessionStorage.setItem('message', JSON.stringify(data.messages))
      })
    }

    this.messageList = this.service.getAllMessage()

    let temp: any = sessionStorage.getItem('logged-user')
    this.currentUser = JSON.parse(temp)

    this.messageList = this.messageList.filter((e: any) => {
      if (e.from == this.currentUser.email || e.to == this.currentUser.email) {
        return e
      }
    })

    this.messageList = this.messageList.map((e: any) => {
      let formObject = <any>{}
      formObject = { ...e }
      formObject['firstName'] = this.currentUser.firstName
      formObject['email'] = this.currentUser.email
      formObject['ward'] = this.currentUser.ward
      return formObject
    })

    this.filteredMessageList = this.messageList

    console.log(this.messageList);
  }

  sortData(e: any) {
    if (e.target.value.length === 0 && e.target.value === '') {
      this.filteredMessageList = this.messageList;
      return;
    }

    let temp = e.target.value ? e.target.value : e;
    temp = temp.toString().toLowerCase();

    this.filteredMessageList = this.messageList.filter((dat: any) => {
      const from = dat['from']?.toString().toLowerCase();
      const to = dat['to']?.toString().toLowerCase();
      return from.startsWith(temp) || to.startsWith(temp);
    });
  }

  sendMessage() {

    if (this.selectedUser.length == 0) {
      this.toastr.error('Please select a user')
      return
    }

    let message: any = []

    for (let i = 0; i < this.selectedUser.length; i++) {
      let formObject: any = <any>{}
      formObject.date = this.formatDate(new Date())
      formObject.from = this.currentUser.email
      formObject.message = this.message
      formObject.subject = this.subject
      formObject.to = this.selectedUser[i]
      message.push(formObject)
    }
    console.log(message);
    this.service.saveMessage(message)
    this.toastr.success('Message sent successfully')
    window.location.reload()
  }

  formatDate(dateString: any) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  displaymessage(data: any) {
    this.composeMessage = false
    this.PreviewMessage = true
    this.selectedMessage = data
  }

  reply() {
    this.composeMessage = true
    this.PreviewMessage = false
    this.selectedUser = [this.selectedMessage?.email == this.selectedMessage.from ? this.selectedMessage?.to
      : this.selectedMessage?.from]

  }

  back() {
    window.location.reload()
  }

}