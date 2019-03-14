import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
const BACKEND_URL = environment.apiUrl + "/";

@Injectable()
export class AppService {

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) {}

  private selectedUserSource = new Subject<any>();
  selectedUser$ = this.selectedUserSource.asObservable();

  private selectedProjectsSource = new Subject<any>();
  selectedProjects$ = this.selectedProjectsSource.asObservable();

  setSelectedUser(user) {
    this.selectedUserSource.next(user);
  }

  getUsers() {
    return this.httpClient.get(BACKEND_URL + 'users/all')
    .pipe(
      map((response: any) => {
        var clean_users = response.obj.map(user => {
          return {"id": user["_id"], "name": (user.first_name + " " + user.last_name) }
        })
        return clean_users;
      })
    )
  }

  getSelectedProjects(user) {

    return this.httpClient.get(BACKEND_URL + 'users/' + user + '/projects')
    .pipe(
      map((response: any) => {

        var clean_projects = response.obj.map(project => {
          var startDate = project["projectId"]["startDate"]
          var assignedDate = project["assignedDate"]
          var endDate = project["projectId"]["endDate"]
          var daysTillAssigned = this.difInDays(startDate, assignedDate)

          return {
            "id": project["projectId"]["_id"],
            "start_date": this.toDateString(startDate),
            "end_date": this.toDateString(endDate),
            "status": this.status(project["isActive"]),
            "credits": project["projectId"]["credits"],
            "assigned_date": assignedDate,
            "time_to_start": this.difOrText(daysTillAssigned)
          }
        })
        return clean_projects
      })
    );
  }

  toDateString(date) {
    date = new Date(date)
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
  }

  difOrText(dif) {
    return (dif > 0) ? dif : "started"
  }

  difInDays(start, end) {
    var date1 = new Date(start);
    var date2 = new Date(end);
    var timeDiff = (date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays
  }

  status(active) {
    console.log(active)
    return active ? "Active" : "Inactive"
  }

}
