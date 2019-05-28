import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { ProductsViewComponent } from './products-view/products-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
