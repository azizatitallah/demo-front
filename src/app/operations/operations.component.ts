import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  operations: {};
  Matricule = 0;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getOperation();
  }

   postOperations(CodeOperation) {
    console.log(CodeOperation);
    const OPERATION = {
      Matricule: this.Matricule,
      Code_Operation: CodeOperation
    };

    this.productService.postOperation(OPERATION).subscribe( (response) => {
      console.log(response);
    });
  }

  getOperation() {
    this.productService.getOperation().subscribe(
      data => this.operations = data,
    );
  }

}
