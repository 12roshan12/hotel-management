import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/service/auth.guard';

const routes: Routes = [
  {
    path: 'main', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
