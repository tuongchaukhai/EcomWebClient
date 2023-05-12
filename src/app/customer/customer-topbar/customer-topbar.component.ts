import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-customer-topbar',
  templateUrl: './customer-topbar.component.html',
  styleUrls: ['./customer-topbar.component.scss']
})
export class CustomerTopbarComponent implements OnInit {
  items: MenuItem[] = [];
  userMenuItems: MenuItem[] = [];
  userMenuItemsLoggedIn: MenuItem[] = [];
  customerName$: string = ''
  loggedIn: boolean = false
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.customerName$ = this.authService.userTokenSubject.getValue().FullName;
    if (this.customerName$)
      this.loggedIn = true;

    this.items = [
      {
        label: 'HOME'
      },
      {
        label: 'SHOP'
      },
      {
        label: 'PAGES'
      },
      {
        label: 'BLOG'
      },
      {
        label: 'CONTACT'
      }
    ];


    this.userMenuItems = [
      {
        label: 'Login',
        command: () => this.router.navigate(['/login'])
      },
      {
        label: 'Register',
        command: () => this.router.navigate(['/register'])
      }];

    this.userMenuItemsLoggedIn = [
      {
        label: 'Hello '+ this.customerName$
      }];
  }

}
