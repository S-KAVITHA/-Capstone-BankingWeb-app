import { Customer } from 'src/app/model/customer.model';
import { account } from 'src/app/model/account.model';

export interface ChequeRequest {
    requestId:number;
    accountNo:account;
    accttype:string;
    acctbranch:string;
    currency:string;
    customerId : Customer; 
    custName:string; 
    description:string;
    createdDate:Date;
   status:string;
}