import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  
  constructor() { }

  ngOnInit() {
    this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Add', icon: 'pi pi-fw pi-plus'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Remove', icon: 'pi pi-fw pi-trash'},
        {label: 'Logout', icon: 'pi pi-fw pi-sign-out'}
    ];
  }

}
