import { mecano } from './../menu/menu.component';
import { Affectation } from './../affectation/affectation.component';
import { Intervention } from './../products-view/products-view.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Presente } from './../presence/presence.component';
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

  
  getMecanicien() {
    return this.http.get(`${this.ipAddress}/intervention/mecano`);
  }
  postIntervention (intervention): Observable<Intervention> {
    return this.http.post<Intervention>(`${this.ipAddress}/intervention/create`, JSON.stringify(intervention), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  postPresence(Presente): Observable<Presente> {
    return this.http.post<Presente>(`${this.ipAddress}/operateur/presence`, JSON.stringify(Presente), this.httpOptions)
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

  getTypeIntervention() {
    return this.http.get(`${this.ipAddress}/categorie/all`);
  }


  getNomOp() {
    return this.http.get(`${this.ipAddress}/NomPrenom/nom`);
  }

  getAffectation() {
    return this.http.get(`${this.ipAddress}/operation/all`);
  }

  postAffectation (Affectation): Observable<Affectation> {
    return this.http.post<Affectation>(`${this.ipAddress}/operation/create`, JSON.stringify(Affectation), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  
  postOperation (Affectation): Observable<Affectation> {
    return this.http.post<Affectation>(`${this.ipAddress}/operation/create`, JSON.stringify(Affectation), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getOperation() {
    return this.http.get(`${this.ipAddress}/operation/alloperation`);
  }

  getOperateur() {
    return this.http.get(`${this.ipAddress}/operation/alloperateur`);
  }
}
