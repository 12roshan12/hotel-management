import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing.routing';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    LandingComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
