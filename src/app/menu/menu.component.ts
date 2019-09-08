import { AutentifierComponent } from './../autentification/autentifier/autentifier.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../autentification/_services';
import { User } from './../autentification/_models';
import {ProductsService} from './../services/products.service';
 @Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  events: string[] = [];
  opened: boolean;
  today: number = Date.now();
  Date = Date.now();
  constructor(
    private authenticationService: AuthenticationService,
    private productService: ProductsService,
    private router: Router
    ){
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    
  mecaniciens: string;

  ngOnInit() {  }

Matricule=1000;
   getMecanoByID(Matricule){
   this.productService. getMecanoByID(Matricule).subscribe((response) => {
    data => this.mecaniciens = data;
    console.log(response);
   });
  }
  

    
currentUser: User;

logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}


}
