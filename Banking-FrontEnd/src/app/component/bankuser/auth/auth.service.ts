import { variable } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/model/customer.model';


@Injectable()
export class CustomerAuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  get isLoggedIn() {
    const userSignIn = sessionStorage.getItem('UserSignIn');
    console.log("auth rtn");
    
    console.log(userSignIn);
    if (userSignIn == 'true') {
      this.loggedIn.next(true);
      console.log(this.loggedIn.asObservable());
    }
    console.log(this.loggedIn.asObservable());
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}
  
  
  login(user: Customer) {
       
    if (user.emailId !== '' && user.password !== '' ) {
      console.log("navbar success");
      sessionStorage.setItem("UserSignIn", 'true');
      this.loggedIn.next(true);
      console.log(this.loggedIn.next);
      this.router.navigate(['/userhome']);
    }
  }

  logout() {
    sessionStorage.removeItem("customerID");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName"); 
    this.loggedIn.next(false);
    sessionStorage.setItem("UserSignIn", 'false');
    this.router.navigate(['/userlogin']);
  }
}
