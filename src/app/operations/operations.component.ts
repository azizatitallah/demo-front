import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  today: number = Date.now();
  Date = Date.now();
  operations: {};
  Matricule = 0;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getOperation();
  }

  updateEffectue( Matricule, Code_Operation) {
    console.log(Code_Operation);

    this.productService.updateEffectue(Matricule, Code_Operation).subscribe( (response) => {
      console.log(response);
    });
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
