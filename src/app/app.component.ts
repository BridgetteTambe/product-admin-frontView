import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'AdminFrontView';
  items: MenuItem[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.buildMenus();
  }

  buildMenus(): void {
    this.items = [
      {
        label: 'Products',
        icon: 'pi pi-fw pi-file',
        routerLink: 'products'
      },
      {
        label: 'Input Text',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'inputtext'
      }
    ];
  }
  // products :any[]  = [{name: 'B'},{name: 'B'}];
}
