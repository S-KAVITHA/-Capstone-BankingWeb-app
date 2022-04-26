import { account } from '../model/account.model';
import { Transaction } from '../model/Transaction.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8080/Customer";


  
  //Get  Account record by CustomerId
  public getCustAcct(id: number) {
   
    console.log(this.url + '/getcustaccounts' + `/${id}`);
    console.log(this.httpClient.get(this.url + '/getcustaccounts' + `/${id}`));
    return this.httpClient.get(this.url + '/getcustaccounts' + `/${id}`);
  }

   //Get  Account IDS by CustomerId
  public getAcctId(id: number) {
   
    console.log(this.url + '/getacctId' + `/${id}`);
    console.log(this.httpClient.get(this.url + '/getacctId' + `/${id}`));
    return this.httpClient.get(this.url + '/getacctId' + `/${id}`);
  }

  //Get all Account Ids
  public getacctlist() {
      console.log(this.httpClient.get(this.url + '/getacctlist'));
      return this.httpClient.get(this.url + '/getacctlist');
  }


  // Get all account
  public getAccounts() {
    console.log((this.url + '/getaccounts/'));
    console.log(this.httpClient.get(this.url + '/getaccounts/'));
    return this.httpClient.get(this.url + '/getaccounts/');
  }


  // Get Account by Id
  public getAccount(id: number) {
    console.log(this.url + '/getaccount' + `/${id}`);
    console.log(this.httpClient.get(this.url + '/getaccount' + `/${id}`));
        return this.httpClient.get(this.url + '/getaccount' + `/${id}`);
  }

  // Get  Account
  public addaccount(account: any) {
    console.log(account);
    return this.httpClient.post(this.url + '/addaccount/', account);
  }
  
}
