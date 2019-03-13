import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';


@Injectable()
export class AppService {

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) {}

  private xSource = new Subject<any>();
  x$ = this.xSource.asObservable();

  private ySource = new Subject<any>();
  y$ = this.ySource.asObservable();

  setStartDate(dateString) {
    this.xSource.next(dateString);
  }

  setDuration(duration) {
    this.ySource.next(duration);
  }

  getBudget(budgetInfo) {
    return this.httpClient.post("http://localhost:3000/budget", budgetInfo)
    .pipe(
      map((response: any) => {

        return response;
      })
    )
  }


}
