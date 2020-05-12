import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '@app/services/authentication.service'
import { User } from '@app/models/user'

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
        <a *ngIf="currentUser" class="navbar-item nav-link" (click)="logout()">[Logout]</a>
      </div>
    </div>
  </div>            
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  currentUser: User

  ngOnInit(): void { }


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x)
    }

    logout() {
        this.authenticationService.logout()
        this.router.navigate(['/login'])
    }

}
