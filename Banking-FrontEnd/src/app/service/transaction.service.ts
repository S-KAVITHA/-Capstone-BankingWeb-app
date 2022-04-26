import { Transaction } from './../model/Transaction.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FundsTransfer } from './../model/FundsTransfer.model';
import { ChequeRequest } from './../model/ChequeRequest.model';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8080/Customer";

    // Deposit  Account
    public depositacct(Transaction: any) {
      console.log(Transaction);
      console.log(this.httpClient.put(this.url + '/depositacct/', Transaction));
      return this.httpClient.post(this.url + '/depositacct/', Transaction);
    }
    
  //withdraw account
    public withdrawacct(Transaction: any) {
      console.log("print" + Transaction);
      console.log(this.httpClient.post(this.url + '/withdrawacct/', Transaction));
      return this.httpClient.post(this.url + '/withdrawacct/', Transaction);
    }

//fundstransfer
public fundstransfer(FundsTransfer: any) {
  console.log("print" + FundsTransfer);
  console.log(this.httpClient.post(this.url + '/transfer/', FundsTransfer));
  return this.httpClient.post(this.url + '/transfer/', FundsTransfer);
}

//Cheque Book Request
public chequerequest(ChequeRequest: any) {
  console.log("print" + ChequeRequest);
  console.log(this.httpClient.post(this.url + '/request/', ChequeRequest));
  return this.httpClient.post(this.url + '/request/', ChequeRequest);
}

}
