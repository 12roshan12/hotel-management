import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManagementComponent } from './account-management.component';
import { SharedModule } from 'src/shared/shared.module';
import { AccountManagementRoutingModule } from './account-management.routing';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AssignRolesComponent } from './assign-roles/assign-roles.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    AccountManagementComponent,
    AddUserComponent,
    DeleteUserComponent,
    EditUserComponent,
    AssignRolesComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AccountManagementRoutingModule,
    SharedModule
  ]
})
export class AccountManagementModule { }
