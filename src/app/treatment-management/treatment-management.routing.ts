import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentManagementComponent } from './treatment-management.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { TreatmentTeamComponent } from './treatment-team/treatment-team.component';
import { TransferPatientComponent } from './transfer-patient/transfer-patient.component';
import { DischargePatientComponent } from './discharge-patient/discharge-patient.component';

const routes: Routes = [
  {
    path: '', component: TreatmentManagementComponent
  },
  {
    path: 'patient-profile', component: PatientListComponent
  },
  {
    path: 'new-patient', component: NewPatientComponent
  },
  {
    path: 'admit-patient', component: AddPatientComponent
  },
  {
    path: 'transfer-patient', component: TransferPatientComponent
  },
  {
    path: 'discharge-patient', component: DischargePatientComponent
  },
  {
    path: 'treatment-team', component: TreatmentTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentManagementRoutingModule { }
