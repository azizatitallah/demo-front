import { ProductsService } from './../services/products.service';
import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

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
    private productService: ProductsService
    ) {
      this.profileForm = this.fb.group({
        ID : ['', Validators.required],
        mecanicien : ['', Validators.required],
        Date : ['', Validators.required],
        NumMachine : ['', Validators.required],
        Reclamation : ['', Validators.required],
        Debut : ['', Validators.required],
        Fin : ['', Validators.required],
        Categorie : ['', Validators.required],
        chaine: ['', Validators.required],
        TypeMachine: ['', Validators.required]
      });
    }

  ngOnInit() {
    this.getIntervention();
  }

  submitForm() {
    this.productService.postIntervention(this.profileForm.value).subscribe( res => {
      console.log('intervention ajoutée');
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
}
