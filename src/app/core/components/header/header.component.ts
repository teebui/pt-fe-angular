import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar is-dark">
    <!-- logo -->
    <div class="navbar-brand">
      <a class="navbar-item">
         <img src="assets/images/angular_logo.png" />
      </a>
    </div>

    <!-- menu -->
    <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" routerLink="/">Home</a>
        <a class="navbar-item" routerLink="/categories">Categories</a>
        <a class="navbar-item" routerLink="/items">Items</a>
      </div>
    </div>
  </div>            
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
