import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import {RouterModule } from  '@angular/router';
import {AppComponents, AppRoutes} from './app.routing'
import { login } from './login.component'
import { DateTimePickerModule } from "ng2-date-time-picker";
import { profile } from './profile.component';
import { FilterArrayPipe } from './filter.pipe'
import { ChartModule } from 'angular2-highcharts'

@NgModule({
  declarations: [
    AppComponent,
    login,
    profile,
    FilterArrayPipe,
    ...AppComponents

  ],
  exports: [FilterArrayPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule,
    RouterModule.forRoot(AppRoutes),
    DateTimePickerModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
