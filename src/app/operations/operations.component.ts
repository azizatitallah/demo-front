import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

export interface Affectation {
  Matricule: number;
  Code_Operation: string;
  Date: Date;

}

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {


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
      Matricule: ['', Validators.required],
      Code_Operation : ['', Validators.required],
    });

  }

  ngOnInit() {
    this.getOperation();
    this.getOperation();
    this.productService.getOperateur().subscribe(
      data => this.operateurs = data,
         );
  }
  
  Code_operation: string;

  postOperations() {
    console.log(this.Code_operation);
    this.productService.postOperation(this.Code_operation).subscribe( (response) => {
      console.log(response);
    });
  }





submitForm() {
    this.productService.postOperation(this.profileForm.value).subscribe( (response) => {
      console.log(response);
      this.getOperation();
      this.profileForm.reset();
    });
  }

  getOperation() {
    this.productService.getOperation().subscribe(
      data => this.operations = data,
    );
  }

}
