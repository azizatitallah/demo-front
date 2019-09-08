import { AlertComponent } from './autentification/_components/alert.component';
import { OperationsComponent } from './operations/operations.component';

import {HttpHeaders, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MenuComponent } from './menu/menu.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AffectationComponent } from './affectation/affectation.component'; 
import {MatRadioModule} from '@angular/material/radio';
import { PresenceComponent } from './presence/presence.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SortieComponent } from './sortie/sortie.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartTypeMachineComponent } from './chart-type-machine/chart-type-machine.component';
import { ChartTypeMachineCategorieComponent } from './chart-type-machine-categorie/chart-type-machine-categorie.component';
import { ChartAtenteVSInterventionComponent } from './chart-atente-vsintervention/chart-atente-vsintervention.component';
import { UpdateInterventionComponent } from './update-intervention/update-intervention.component';
import {MatCardModule} from '@angular/material/card';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './autentification/_helpers';
import { JwtInterceptor, ErrorInterceptor } from './autentification/_helpers';
import { AlertService, AuthenticationService, UserService } from './autentification/_services';
import { HomeComponent } from './autentification/home';
import { LoginComponent } from './autentification/login';
import { RegisterComponent } from './autentification/register';
import { AutentifierComponent } from './autentification/autentifier/autentifier.component';
import { ChartRendementComponent } from './chart-rendement/chart-rendement.component';
import { ProductsService } from './services/products.service';
 
const appRoutes: Routes = [
  {
    path: 'Operation',
    component: OperationsComponent 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'interventions VS temps attente',
    component: ChartAtenteVSInterventionComponent
  },
  {
    path: 'interventions en fonction du typeMachine',
    component: ChartTypeMachineComponent
  },
  {
    path: 'interventions en fonction de categorie',
    component: ChartsComponent
  },
  {
    path: 'interventions',
    component: ProductsViewComponent
  },
  {
    path: 'update',
    component: UpdateInterventionComponent
  },

  {
    path: 'affectations',
    component: AffectationComponent
  },
  {
    path: 'Presences',
    component: PresenceComponent
  },
  {
    path: 'Sortie',
    component: SortieComponent
  },
  
  { path: 'login', component: LoginComponent }, 
];

@NgModule({
  declarations: [

    AppComponent,
    ProductsViewComponent,
    MenuComponent,
    AffectationComponent,
    LoginComponent,
    PresenceComponent,
    OperationsComponent,
    SortieComponent,
    ChartsComponent,
    ChartTypeMachineComponent,
    ChartTypeMachineCategorieComponent,
    ChartAtenteVSInterventionComponent,
    UpdateInterventionComponent,  AlertComponent, HomeComponent, RegisterComponent, AutentifierComponent, ChartRendementComponent,
  ],
  imports: [MatSidenavModule, MatChipsModule, MatToolbarModule, MatCheckboxModule, MatSelectModule, MatGridListModule,
    RouterModule.forRoot(appRoutes), MatRadioModule,
    HttpModule, MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],

  providers: [ AlertService, AuthenticationService, UserService, ProductsService, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],


  bootstrap: [AppComponent]
})
export class AppModule { }
