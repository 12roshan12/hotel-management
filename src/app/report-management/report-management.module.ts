import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportManagementComponent } from './report-management.component';
import { SharedModule } from 'src/shared/shared.module';
import { ReportManagementRoutingModule } from './report-management.routing';
import { PreviewMessageComponent } from './preview-message/preview-message.component';



@NgModule({
  declarations: [
    ReportManagementComponent,
    PreviewMessageComponent
  ],
  imports: [
    CommonModule,
    ReportManagementRoutingModule,
    SharedModule
  ]
})
export class ReportManagementModule { }
