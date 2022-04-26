import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;
  public isAccessible: any;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log( this.isLoggedIn$);
    console.log("sucess adminnavbar");
  }
 
  onLogout() {
    this.authService.logout();
    sessionStorage.removeItem('userRole');
  }

}
