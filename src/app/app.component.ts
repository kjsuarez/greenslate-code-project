import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from "@angular/forms";
import { Subscription } from 'rxjs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  title = 'db-code-challenge';
  server_status = 'unknown';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.wakeServer()
  }

  wakeServer() {
    this.appService.wakeServer()
    .subscribe(
      res => {
        this.server_status = res;
      }
    )
  }
}
