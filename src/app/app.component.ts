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
            label: 'Home',
            icon: 'pi pi-fw pi-file',
            routerLink: ''
          },
        {
            label: 'My Profile',
            icon: 'pi pi-fw pi-file',
            routerLink: 'profile'
          },
      {
        label: 'Register Admin',
        icon: 'pi pi-fw pi-file',
        routerLink: 'admin'
      },
      
      {
        label: 'Products',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'products'
      }
      ,
      
      {
        label: 'Customer Info',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'customer'
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'login'
      }
    ];
  }
}
