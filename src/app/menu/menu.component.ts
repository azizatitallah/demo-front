import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductsService } from './../services/products.service'; 


export interface NomPrenom {
  nomprenom : string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  NomPrenom : {};
  today: number = Date.now();
  constructor( 
    private productService: ProductsService,
    private router: Router) { }

  ngOnInit() {

    
    this.productService.getNomOp().subscribe(
      data => this.NomPrenom = data,
         );
  }

}
