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
import {MatSelectModule} from '@angular/material/select';
import { MenuComponent } from './menu/menu.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AffectationComponent } from './affectation/affectation.component';
const appRoutes: Routes = [
  {
    path: 'issues-list',
    component: AppComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsViewComponent,
    MenuComponent,
    AffectationComponent,
   

  ],
  imports: [MatSidenavModule, MatChipsModule, MatToolbarModule, MatCheckboxModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
