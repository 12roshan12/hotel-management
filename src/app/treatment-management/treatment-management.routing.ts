import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentManagementComponent } from './treatment-management.component';

const routes: Routes = [
    {
        path:'',component:TreatmentManagementComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentManagementRoutingModule { }
