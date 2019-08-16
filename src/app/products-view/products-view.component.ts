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
}

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})

export class ProductsViewComponent implements OnInit {

  payLoad = '';
  profileForm: FormGroup;

  displayedColumns: string[] = [
    'ID', 'mecanicien', 'Date',
   'NumMachine', 'Reclamation', 'Debut',
    'Fin', 'Categorie', 'chaine', 'TypeMachine'
  ];

  dataSource = new Array<Intervention>();

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private productService: ProductsService
    ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      ID : ['', Validators.required],
      mecanicien : [''],
      Date : [''],
      NumMachine : [''],
      Reclamation : [''],
      Debut : [''],
      Fin : [''],
      Categorie : [''],
      chaine: [''],
      TypeMachine: ['']
    });

    this.getIntervention();
  }

  submitForm() {
    this.productService.postIntervention(this.profileForm.value).subscribe( res => {
      console.log('intervention ajoutée');
      this.getIntervention();
    });
  }

  updateProfile() {
    this.profileForm.setValue({
      ID : '',
      mecanicien : '',
      Date : '',
      NumMachine : '',
      Reclamation : '',
      Debut : '',
      Fin : '',
      Categorie : '',
      chaine: '',
      TypeMachine: '',
    });
  }

  getIntervention() {
    this.productService.getIntervention().subscribe(
    (response) => {
      console.log(response);
      this.dataSource = response as Array<Intervention>;
    });
  }
}
