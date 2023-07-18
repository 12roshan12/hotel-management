import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentManagementComponent } from './treatment-management.component';
import { TreatmentManagementRoutingModule } from './treatment-management.routing';
import { SharedModule } from 'src/shared/shared.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { TreatmentTeamComponent } from './treatment-team/treatment-team.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { TransferPatientComponent } from './transfer-patient/transfer-patient.component';
import { DischargePatientComponent } from './discharge-patient/discharge-patient.component';



@NgModule({
  declarations: [
    TreatmentManagementComponent,
    PatientListComponent,
    TreatmentTeamComponent,
    AddPatientComponent,
    NewPatientComponent,
    TransferPatientComponent,
    DischargePatientComponent
  ],
  imports: [
    CommonModule,
    TreatmentManagementRoutingModule,
    SharedModule
  ]
})
export class TreatmentManagementModule { }
