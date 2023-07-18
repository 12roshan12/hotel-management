import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '', component: LandingComponent,
        children: [
            {
                path: 'treatment-management', loadChildren: () => import('../treatment-management/treatment-management.module').then(m => m.TreatmentManagementModule),
            },
            {
                path: 'schedule-management', loadChildren: () => import('../schedule-management/schedule-management.module').then(m => m.ScheduleManagementModule),
            },
            {
                path: 'report-management', loadChildren: () => import('../report-management/report-management.module').then(m => m.ReportManagementModule),
            },
            {
                path: 'account-management', loadChildren: () => import('../account-management/account-management.module').then(m => m.AccountManagementModule),
            },
            {
                path: '', component: MainComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
