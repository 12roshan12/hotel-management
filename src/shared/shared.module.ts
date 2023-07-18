import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
  ],
  imports: [
    ToastrModule.forRoot()
  ],
  exports: [
    ToastrModule,
    MatIconModule,
    NgxPaginationModule
  ],
})
export class SharedModule { }
