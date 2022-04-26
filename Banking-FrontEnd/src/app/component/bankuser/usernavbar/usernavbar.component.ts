import { Observable } from 'rxjs';
import { CustomerAuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;
  public isAccessible: any;
  
  constructor(private router: Router, private authService: CustomerAuthService) { }

  ngOnInit() {
    
    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log("sucess buyernavbar");
  }

 
  onLogout() {
    this.authService.logout();
    console.log("clear Role" + sessionStorage.getItem('userRole'));
  }

}
