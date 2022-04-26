import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public getCustId: any;

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8080/Customer";

  public getcustIds() {
    return this.httpClient.get(this.url + '/getcustIds/');
  }

  // Get all customer
  public getCustomers() {
    return this.httpClient.get(this.url + '/getcustomers/');
  }


  // Get One User by email
  public getUserByEmail(email: string) {
    console.log(email);
    console.log((this.url + '/getUserByEmail/' + `${email}`));
    return this.httpClient.get(this.url + '/getUserByEmail/' + `${email}`);
  }

  // add customer
  public addcustomer(user: any) {
    return this.httpClient.post(this.url + '/addcustomer/', user);
  }

  public updcustomer(user: any) {
    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);

    console.log(user);
    console.log(this.httpClient.put(this.url + '/updatecust/' + `${this.getCustId}`, user));
    return this.httpClient.put(this.url + '/updatecust/' + `${this.getCustId}`, user);
  }


  public getcustomerById(id: number) {
    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);
    console.log(this.httpClient.get(this.url + '/getcustomerById' + `${id}`));
    return this.httpClient.get(this.url + '/getcustomerById' + `${id}`);
  }
}
