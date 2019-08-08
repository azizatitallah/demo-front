import { ProductsService } from './../services/products.service';
import { Component, OnInit, AfterContentChecked , NgZone } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


export interface intervention {
  ID: number;
  mecanicien: string;
  Date: number;
  NumMachine: number;
  Reclamation:number;
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
export class ProductsViewComponent implements OnInit, AfterContentChecked {

  payLoad = '';
  profileForm: FormGroup;
ngOnInit(){
  this.postIntervention()}

  constructor(public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private productService: ProductsService
    ) { }

postIntervention() {
 this.profileForm = this.fb.group({
   
  ID : ['', Validators.required],
  mecanicien : [''],
  Date : [''],
  NumMachine : [''],
  Reclamation : [''],
  Debut : [''],
  Fin : [''],
  Categorie : [''],
  chaine:[''],
  TypeMachine:['']
  });
}
  submitForm() {
    this.productService.postIntervention(this.profileForm.value).subscribe(
      res => { console.log('intervention ajoutée')
      this.ngZone.run(() => this.router.navigateByUrl('/issues-list'))
    })
  };

    

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
      chaine:'',
      TypeMachine:'',
    });
  }


  displayedColumns: string[] = ['ID', 'mecanicien', 'Date',
   'NumMachine', 'Reclamation', 'Debut',
    'Fin', 'Categorie', 'chaine', 'TypeMachine'];

  dataSource = new Array<intervention>();
  
 

  ngAfterContentChecked() {
    this.getIntervention();
  }


  getIntervention() { 
    this.productService.getIntervention().subscribe(
    (response) => {
      console.log(response);
      this.dataSource = response as Array<intervention>;
    }); 
  }
  



  

}
