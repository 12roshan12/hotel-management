import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleManagementComponent } from './schedule-management.component';

const routes: Routes = [
    {
        path:'',component:ScheduleManagementComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleManagementRoutingModule { }
