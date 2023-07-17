import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleManagementComponent } from './schedule-management.component';
import { SharedModule } from 'src/shared/shared.module';
import { ScheduleManagementRoutingModule } from './schedule-management.routing';



@NgModule({
  declarations: [
    ScheduleManagementComponent
  ],
  imports: [
    CommonModule,
    ScheduleManagementRoutingModule,
    SharedModule
  ]
})
export class ScheduleManagementModule { }
