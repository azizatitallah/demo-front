import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

<<<<<<< HEAD


operationDetails: { Code_Operation:"" , Matricule:number } ; 
 postOperations(){
    this.productService.postOperation(this.operationDetails).subscribe( (response) => {   
      console.log(response);
      this.getOperation();
      console.log(this.operationDetails);
  });
=======
  postOperations() {
    this.productService.postOperation(this.Code_operation).subscribe( (response) => {
      console.log(response);
    });
  }
>>>>>>> 17e8e7aa24bdfc62366a59d6d0ba692836367d59

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
