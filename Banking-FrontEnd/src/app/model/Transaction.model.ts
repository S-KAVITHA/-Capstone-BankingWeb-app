import { Customer } from 'src/app/model/customer.model';
import { account } from 'src/app/model/account.model';

export interface Transaction {
    transactionId:number;
    accountNo:account;
    accttype:string;
    acctbranch:string;
    currency:string;
    customerId : Customer;  
    amount:number;
    createdDate:Date;
    txntype: string;
    custName:string; 
    status:string;
}