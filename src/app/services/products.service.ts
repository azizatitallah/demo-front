import { Intervention } from './../products-view/products-view.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  ipAddress = 'http://127.0.0.1:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getInterventionByID() {
    return this.http.get(`${this.ipAddress}/intervention/all`);
  }

  getIntervention() {
    return this.http.get(`${this.ipAddress}/intervention/all`);
  }

  postIntervention (intervention): Observable<Intervention> {
    return this.http.post<Intervention>(`${this.ipAddress}/intervention/create`, JSON.stringify(intervention), this.httpOptions)
      .pipe(
        retry(1),
         catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
