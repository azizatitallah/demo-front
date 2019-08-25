import { Component } from '@angular/core';

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

}
