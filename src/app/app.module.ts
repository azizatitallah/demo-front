import { ProductsService } from './services/products.service';
import {HttpHeaders } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductsViewComponent,
   
  ],
  imports: [JsonpModule ,
    
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
