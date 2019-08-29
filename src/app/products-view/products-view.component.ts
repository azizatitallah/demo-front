import { ProductsService } from './../services/products.service';
import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export interface Intervention {
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
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})

export class ProductsViewComponent implements OnInit {
  today: number = Date.now();
   categories: {};
  profileForm: FormGroup;
  displayedColumns: string[] = [
    'ID', 'mecanicien', 'Date',
   'NumMachine', 'Reclamation', 'Debut',
    'Fin', 'Categorie', 'chaine', 'TypeMachine', 'Etat_Intervention'
  ];

  dataSource = new Array<Intervention>();
 
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

    mecaniciens: {};
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
    this.productService.postIntervention(this.profileForm.value).subscribe( (response) => {
      console.log(response);
      this.getIntervention();
      this.profileForm.reset();
    });
  }

  getIntervention() {
    this.productService.getIntervention().subscribe(
    (response) => {
      console.log(response);
      this.dataSource = response as Array<Intervention>;
    });
  }

  clickEvent() {
    return this.profileForm.controls.Debut.setValue((new Date().getTime()) / 1000);
  }
  
  clickFin() {
    return this.profileForm.controls.Fin.setValue((new Date().getTime()) / 1000);
  }




}
