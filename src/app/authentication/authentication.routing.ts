import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
    {
        path:'',component:AuthenticationComponent
    },
    {
        path:'sign-up',component:SignUpComponent
    },
    {
        path:'sign-in',component:SignInComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
