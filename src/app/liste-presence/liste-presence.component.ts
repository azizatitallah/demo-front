import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { Router } from '@angular/router';


export interface presence {
  Nom: string;
  Prenom:string;
  Arrive:number;

}
@Component({
  selector: 'app-liste-presence',
  templateUrl: './liste-presence.component.html',
  styleUrls: ['./liste-presence.component.css']
})
export class ListePresenceComponent implements OnInit {

  displayedColumns: string[] = [ 'Nom', 'Prenom', 'Arrive'];
  dataSource = new Array<presence>();
  constructor(
    
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this. getOperateurPresent();
  }

  getOperateurPresent() {
    this.productService. getOperateurPresent().subscribe(
    (response) => {
      console.log(response);
      this.dataSource = response as Array<presence>;
    });
  }
}
