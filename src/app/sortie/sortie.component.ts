import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export class employee{
  Matricule: number;
  date: Date;
  Debut: number;
  Fin: number;

}

@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.css']
})
export class SortieComponent implements OnInit {
Presences:{};
Matricule:number;
  
constructor(
    private productService: ProductsService,
    private router: Router
    ) {  }
   
  ngOnInit() { 
      this.productService.getOperateurPresent().subscribe(
             data => this.Presences = data,    
             );
             
      }


  updatePresence(Matricule) {
        this.productService.updatePresence(Matricule).subscribe( (response) => {
      console.log(response);
    });
    
    
    console.log(Matricule);
            }
  

}
