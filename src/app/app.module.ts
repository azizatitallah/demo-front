import { OperationsComponent } from './operations/operations.component';
import { ProductsService } from './services/products.service';
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
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard'; 
import {MatRadioModule} from '@angular/material/radio';
import { PresenceComponent } from './presence/presence.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SortieComponent } from './sortie/sortie.component';
const appRoutes: Routes = [
  {
    path: 'interventions',
    component: ProductsViewComponent
  },
  {
    path: 'affectations',
    component: AffectationComponent
  },
  {
    path: 'Presences',
    component: PresenceComponent
  },
  
  { path: 'login', component: LoginComponent },  
  { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] }  

];

@NgModule({
  declarations: [

    AppComponent,
    ProductsViewComponent,
    MenuComponent,
    AffectationComponent,
    LoginComponent,
    DashboardComponent,
    PresenceComponent,
    OperationsComponent,
    SortieComponent
  ],
  imports: [MatSidenavModule, MatChipsModule, MatToolbarModule, MatCheckboxModule, MatSelectModule, MatGridListModule,
    RouterModule.forRoot(appRoutes), MatRadioModule,
    HttpModule,
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
    HttpClientModule,
  ],
  providers: [ProductsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
