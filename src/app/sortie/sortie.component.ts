import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export class employee {

  Matricule: number;
}

@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.css']
})
export class SortieComponent implements OnInit {
  Presences:{};
  employeeData: number ;
  profileForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
    ) {
      this.profileForm = this.fb.group({
       Matricule: ['', Validators.required],
       });
    }
   
  ngOnInit() { 
      this.productService.getOperateurPresent().subscribe(
             data => this.Presences = data,    
             )      
  }


 submitForm(Matricule) {
   
    this.productService.updatePresence(Matricule, this.employeeData).subscribe((response) => {
       console.log(response);
      })
   } 
}
