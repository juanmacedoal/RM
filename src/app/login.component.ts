import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class login implements OnInit{
  title = 'login'

  constructor(private router: Router){}
  private showDatePicker: boolean = false;
  private showTimePicker: boolean = false;
  private moment: Date;




  ngOnInit(): void {
  }

  setDate(date: any): void {
    this.moment = date;
    return;
  }

  setTime(time: any): void {
    this.moment = time;
    return;
  }

  toggleDatePicker(status: boolean): void {
    this.showDatePicker = status;
    return;
  }

  toggleTimePicker(status: boolean): void {
    this.showTimePicker = status;
    return;
  }

}
