import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public getCustId: any;
  public cfirstName: any;
  public clastName: any;
  public emailId: any;
  public address: any;
  public city: any;
  public state: any;
  public zipcode: any;
  public country: any;
  public birthDate: any;


  constructor(private acctstxnSrv: AccountService ,private router:Router) { }

  ngOnInit(): void {
    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);

    this.cfirstName = sessionStorage.getItem('firstName');
    this.clastName = sessionStorage.getItem('lastName');

    this.emailId = sessionStorage.getItem('emailId');
    this.address = sessionStorage.getItem('address');

    this.city = sessionStorage.getItem('city');
    this.state = sessionStorage.getItem('state');

    this.zipcode = sessionStorage.getItem('zipcode');
    this.country = sessionStorage.getItem('country');

    this.birthDate = sessionStorage.getItem('birthDate');
  
      }

}
