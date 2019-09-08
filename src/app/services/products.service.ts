import { Interventions } from './../update-intervention/update-intervention.component';
import { SortieComponent, employee} from './../sortie/sortie.component';
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

  getMecanoByID(Matricule) {
    return this.http.get(`${this.ipAddress}/intervention/${Matricule}`);
  }

  getInterventionTypeMachine(){
    return this.http.get(`${this.ipAddress}/intervention/interventionTypeMachine`);
  }

  getInterventionAttente(){
    return this.http.get(`${this.ipAddress}/intervention/interventionAttente`);
  }

  getOperateurPresent() {
    return this.http.get(`${this.ipAddress}/operateur/operateurPresent`);
  }

  getInterventionCategorie() {
    return this.http.get(`${this.ipAddress}/intervention/interventionCategorie`);
  }

  getIntervention() {
    return this.http.get(`${this.ipAddress}/intervention/all`);
  }

  getMecanicien() {
    return this.http.get(`${this.ipAddress}/intervention/mecano`);
  }
  getInterventionMachineCategorie(){
    return this.http.get(`${this.ipAddress}/intervention/interventionCategorieMachine`);
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

  postAffectation(effectue): Observable<any> {
    return this.http.post<any>(`${this.ipAddress}/operation/create`, effectue, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  postOperation(effectue): Observable<Affectation> {
    return this.http.post<Affectation>(`${this.ipAddress}/operation/create`, effectue, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  UpdateIntervention(ID): Observable<Interventions> {
    return this.http.put<Interventions>(`${this.ipAddress}/intervention/update/${ID}`, JSON.stringify(ID));
  }

  updatePresence(Matricule): Observable<employee> {
    return this.http.put<employee>(`${this.ipAddress}/operateur/${Matricule}`, JSON.stringify(Matricule));
  }
  updateEffectue(Matricule, Code_Operation): Observable<any> {
    return this.http.put<any>(`${this.ipAddress}/effectue/${Matricule}/${Code_Operation}`, JSON.stringify(Code_Operation));
  }

  getOperation() {
    return this.http.get(`${this.ipAddress}/operation/alloperation`);
  }

  getOperateur() {
    return this.http.get(`${this.ipAddress}/operation/alloperateur`);
  }
}
