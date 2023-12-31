import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentUserPipe } from './currentUser.pipe';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    CurrentUserPipe
  ],
  imports: [
    ToastrModule.forRoot()
  ],
  exports: [
    ToastrModule,
    MatIconModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    CurrentUserPipe,
    NgSelectModule
  ],
})
export class SharedModule { }
