
import { Customer } from 'src/app/model/customer.model';
export interface account {
    accountId: number;
    accttype: string;
    acctbranch: string;
    currency: string;
    customerId: Customer;
    custName: string;
    balance: number;
    createdDate: Date;
    status: string;
}

/* import { Customer } from 'src/app/model/customer.model';

export class account {
    id:number;
    accttype:string;
    acctbranch:string;
    currency:string;
    customerId : Customer;  
    balance:number;
    createdDate:Date;

    constructor(id: number, acctbranch:string, currency:string, customerId : Customer, accttype: string,balance:number,createdDate:Date) {
        this.id = id;
        this.accttype= accttype;
        this.acctbranch = acctbranch;
        this.currency = currency;
        this.customerId = customerId;
        this.balance = balance;
        this.createdDate = createdDate;      
    }

    setacctbranch(acctbranch: string): void {
        this.acctbranch= acctbranch;
    }

    getacctbranch(acctbranch: string): string {
           return acctbranch;
    }

    setcurrency(currency: string): void {
        this.currency= currency;
    }

    getcurrency(currency: string): string {
           return currency;
    }


    setcreatedDate(createdDate: Date): void {
        this.createdDate= createdDate;
    }

    getcreatedDate(createdDate: Date): Date {
           return createdDate;
    }

    setaccttype(accttype: string): void {
        this.accttype= accttype;
    }

    getaccttype(accttype: string): string {
           return accttype;
    }


    setcustomerId(customerId: Customer): void {
        this.customerId= customerId;
    }

    getcustomerId(customerId: Customer): Customer {
           return customerId;
    }

    setbalance(balance: number): void {
        this.balance= balance;
    }

    getbalance(balance: number): number {
           return balance;
    }

     setid(id: number): void {
        this.id= id;
    }

    getid(id: number): number {
           return id;
    }
} */