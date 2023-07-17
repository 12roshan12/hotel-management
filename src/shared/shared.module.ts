import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
  ],
  imports: [
    ToastrModule.forRoot()
  ],
  exports: [
    ToastrModule,
    MatIconModule
  ],
})
export class SharedModule { }
