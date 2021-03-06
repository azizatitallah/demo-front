import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from './../_services';
import { User } from './../_models';
@Component({
  selector: 'app-autentifier',
  templateUrl: './autentifier.component.html',
  styleUrls: ['./autentifier.component.css']
})
export class AutentifierComponent implements OnInit {

 

  ngOnInit() {
  }


    
currentUser: User;


constructor(
  
  private router: Router,
  private authenticationService: AuthenticationService) {
  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

}


 


logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

}
