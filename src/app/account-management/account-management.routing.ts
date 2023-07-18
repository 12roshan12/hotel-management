import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManagementComponent } from './account-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AssignRolesComponent } from './assign-roles/assign-roles.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: AccountManagementComponent
  },
  {
    path: 'add', component: AddUserComponent
  },
  {
    path: 'edit', component: EditUserComponent
  },
  {
    path: 'delete', component: DeleteUserComponent
  },
  {
    path: 'assign-role', component: AssignRolesComponent
  },
  {
    path: 'user-list', component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountManagementRoutingModule { }
