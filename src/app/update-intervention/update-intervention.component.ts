import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export interface Interventions {
  ID: number;
  mecanicien: string;
  Date: number;
  NumMachine: number;
  Reclamation: number;
  Debut: number;
  Fin: number;
  Categorie: string;
  chaine: string;
  TypeMachine: string;
  Etat_Intervention: string;
}

@Component({
  selector: 'app-update-intervention',
  templateUrl: './update-intervention.component.html',
  styleUrls: ['./update-intervention.component.css']
})
export class UpdateInterventionComponent implements OnInit {

  today: number = Date.now();
   categories: {};
  profileForm: FormGroup;
  mecaniciens: {};

 
  constructor(
    public fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
    ) {
      this.profileForm = this.fb.group({
        mecanicien : ['', Validators.required],
        NumMachine : ['', Validators.required],
        Reclamation : ['', Validators.required],
        Debut : ['', Validators.required],
        Fin : ['' , Validators.required],
        Categorie : ['', Validators.required],
        chaine: ['', Validators.required],
        TypeMachine: ['', Validators.required]
      });

    }

 




  
  


  clickEvent() {
    return this.profileForm.controls.Debut.setValue((new Date().getTime()) / 1000);
  }
  
  clickFin() {
    return this.profileForm.controls.Fin.setValue((new Date().getTime()) / 1000);
  }

 displayedColumns: string[] = [
   'ID', 'mecanicien', 'Date',
  'NumMachine', 'Reclamation', 'Debut',
   'Fin', 'Categorie', 'chaine', 'TypeMachine', 'Etat_Intervention', 'Update'
 ];

 dataSource = new Array<Interventions>();



   
 ngOnInit() {
   this.getIntervention();
   this.productService.getTypeIntervention().subscribe(
     data => this.categories = data,
        );

        this.productService.getMecanicien().subscribe(
         data => this.mecaniciens = data,
            );
 }

 submitForm() {
   console.log(this.profileForm.value);
   this.productService.UpdateIntervention(this.profileForm.value).subscribe( (response) => {
     console.log(response);
     this.getIntervention();
     this.profileForm.reset();
   });
 }

 getIntervention() {
   this.productService.getIntervention().subscribe(
   (response) => {
     console.log(response);
     this.dataSource = response as Array<Interventions>;
   });
 }



}
