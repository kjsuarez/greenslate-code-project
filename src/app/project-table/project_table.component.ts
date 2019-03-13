import { Component } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { AppService } from '../app.service';

@Component({
  selector: 'project-table',
  templateUrl: './project_table.component.html',
  styleUrls: ['./project_table.component.css']
})
export class ProjectTableComponent {

  startDate;
  dateString;

  constructor(private appService: AppService){}

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.startDate = event.value
  //   this.dateString = this.dateToString(event.value)
  //   this.budgeterService.setStartDate(this.dateString)
  // }
  //
  // dateToString(date) {
  //   return (date.getMonth() + 1) + "/" + this.startDate.getDate() + "/" + this.startDate.getFullYear()
  // }
}
