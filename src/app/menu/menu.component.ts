import { Component } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

export interface mecano {
  
  Nom_mecanicien: string;

}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  profileForm: FormGroup;
  events: string[] = [];
  opened: boolean;
  today: number = Date.now();
  Date = Date.now();
  constructor(
    public fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
    ) {
      
     this.profileForm = this.fb.group({
      Nom_mecanicien: ['', Validators.required]
    });
    }

  mecaniciens: {}


data: string; 

  ngOnInit() {
    console.log(this.data)
  this.productService.getMecanicien().subscribe(
    data => this.mecaniciens = data,
       );
  }


}
