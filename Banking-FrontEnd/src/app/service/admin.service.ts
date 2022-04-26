import { account } from '../model/account.model';
import { Transaction } from '../model/Transaction.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8080/Admin";


  
  //Get  customer record by status
  public getCustApproval(status: string) {
   
    console.log(this.url + '/getcustapprove' + `/${status}`);
    console.log(this.httpClient.get(this.url + '/getcustapprove' + `/${status}`));
    return this.httpClient.get(this.url + '/getcustapprove' + `/${status}`);
  }

    //Get  account record by status
  public getAcctApproval(status: string) {
   
    console.log(this.url + '/getacctapprove' + `/${status}`);
    console.log(this.httpClient.get(this.url + '/getacctapprove' + `/${status}`));
    return this.httpClient.get(this.url + '/getacctapprove' + `/${status}`);
  }

   //Get  transaction record by status
  public getTxnApproval(status: string) {
   
    console.log(this.url + '/gettxnapprove' + `/${status}`);
    console.log(this.httpClient.get(this.url + '/gettxnapprove' + `/${status}`));
    return this.httpClient.get(this.url + '/gettxnapprove' + `/${status}`);
  }

   //Get  FT record by status
 public getTransferApproval(status: string) {
   
  console.log(this.url + '/gettransferapprove' + `/${status}`);
  console.log(this.httpClient.get(this.url + '/gettransferapprove' + `/${status}`));
  return this.httpClient.get(this.url + '/gettransferapprove' + `/${status}`);
}

  //Get  Cheques record by status
 public getChequeApproval(status: string) {
   
  console.log(this.url + '/getchequeapprove' + `/${status}`);
  console.log(this.httpClient.get(this.url + '/getchequeapprove' + `/${status}`));
  return this.httpClient.get(this.url + '/getchequeapprove' + `/${status}`);
}


  //Update customer record as approved status
  public updatecustByStatusId(item: any) {
    console.log(this.url+ '/updatecust' + `/${item.customerId}`, item);
    console.log(this.httpClient.put(this.url+ '/updatecust' + `/${item.customerId}`, item));
   return this.httpClient.put(this.url+ '/updatecust' + `/${item.customerId}`, item);
 } 
  

  //Update acct record as approved status
  public updateacctByStatusId(item: any) {
    console.log(this.httpClient.put(this.url + '/updateacct' + `/${item.accountId}`, item));
   return this.httpClient.put(this.url+ '/updateacct' + `/${item.accountId}`, item);
 } 

 
  //Update transaction record as approved status
  public updatetxnByStatusId(item: any) {
    console.log(this.httpClient.put(this.url + '/updatetxn' + `/${item.transactionId}`, item));
   return this.httpClient.put(this.url + '/updatetxn' + `/${item.transactionId}`, item);
 } 

 
  //Update transfer record as approved status
  public updatetransferByStatusId(item: any) {
    console.log(this.httpClient.put(this.url + '/updatetransfer' + `/${item.transferId}`, item));
   return this.httpClient.put(this.url + '/updatetransfer' + `/${item.transferId}`, item);
 } 

 
  //Update cheques record as approved status
  public updatechequeByStatusId(item: any) {
    console.log(this.httpClient.put(this.url + '/updatecheques' + `/${item.requestId}`, item));
   return this.httpClient.put(this.url+ '/updatecheques' + `/${item.requestId}`, item);
 } 
 
}
