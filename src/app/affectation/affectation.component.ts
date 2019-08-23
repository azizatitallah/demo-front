import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export interface Affectation {
  Matricule: number;
  Code_Operation: number;
  Date: Date;

}

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {

  

 operateurs: {};
 operations: {};

 profileForm: FormGroup;

 displayedColumns: string[] = [ 'Matricule', 'Code_Operation', 'Date'];

 dataSource = new Array<Affectation>();

 
 constructor(
   public fb: FormBuilder,
   private productService: ProductsService,
   private router: Router
   ) {
     this.profileForm = this.fb.group({
       operateur: ['', Validators.required],
       operation : ['', Validators.required],
     });

     
   }

 ngOnInit() {    
   this.getAffectation();
   this.productService.getOperateur().subscribe(
     data  => this.operateurs = data as Array<any>
        );
    this.productService.getOperation().subscribe(
         data => this.operations = data as Array<any>
            );
 }


 submitForm() {
   this.productService.postAffectation(this.profileForm.value).subscribe( (response) => {
     console.log(response);
     this.getAffectation();
     this.profileForm.reset();
   });
 }

 getAffectation() {
   this.productService.getAffectation().subscribe(
   (response) => {
     console.log(response);
     this.dataSource = response as Array<Affectation>;
   });
 }
 
 

}
