import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from 'src/shared/shared.module';
import { AuthenticationRoutingModule } from './authentication.routing';
import { AuthenticationComponent } from './authentication.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
