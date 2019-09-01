import { Component } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  events: string[] = [];
  opened: boolean;
  today: number = Date.now();
  Date = Date.now();
  constructor(
    private productService: ProductsService,
    private router: Router
    ){}
    
  mecaniciens: string;

  ngOnInit() {  }

Matricule=1000;
   getMecanoByID(Matricule){
   this.productService. getMecanoByID(Matricule).subscribe((response) => {
    data => this.mecaniciens = data;
    console.log(response);
   });
  }


}
