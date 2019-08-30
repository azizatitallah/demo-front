import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export interface Presente {
  Matricule: number;
}

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {

  profileForm: FormGroup;
  operateurs: string[];
  checked = false;

  constructor(
    public fb: FormBuilder,
    private productService: ProductsService,
    private router: Router) {
      this.profileForm = this.fb.group({
        Matricule : ['', Validators.required]
       });
    }

  ngOnInit() {
    this.productService.getOperateur().subscribe(
      data  => this.operateurs = data as Array<any>
    );
  }

  submitForm() {
  console.log(this.profileForm.value);
  this.productService.postPresence(this.profileForm.value).subscribe( (response) => {
    console.log(response);
    this.profileForm.reset();
  });
  }
}
