import { Customer } from 'src/app/model/customer.model';
import { account } from 'src/app/model/account.model';

export interface FundsTransfer {
    transferId: number;
    fromAcctNo: account;
    fromAccbranch: string;
    fromAcctype: string;
    toAcctNo: account;
    toAccbranch: string;
    toAcctype:string;
    toAccCCY: string;
    fromAccCCY: string;
    amount: number;
    createdDate: Date;
    status:string;
}
