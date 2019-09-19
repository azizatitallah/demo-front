import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suivi-intervention',
  templateUrl: './suivi-intervention.component.html',
  styleUrls: ['./suivi-intervention.component.css']
})
export class SuiviInterventionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
