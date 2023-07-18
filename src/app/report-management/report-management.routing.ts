import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportManagementComponent } from './report-management.component';
import { PreviewMessageComponent } from './preview-message/preview-message.component';

const routes: Routes = [
    {
        path:'',component:ReportManagementComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportManagementRoutingModule { }
