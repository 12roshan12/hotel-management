import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentManagementComponent } from './treatment-management.component';
import { TreatmentManagementRoutingModule } from './treatment-management.routing';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    TreatmentManagementComponent
  ],
  imports: [
    CommonModule,
    TreatmentManagementRoutingModule,
    SharedModule
  ]
})
export class TreatmentManagementModule { }
