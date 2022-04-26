import { account } from '../../../../model/account.model';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})


export class BalanceComponent implements OnInit {
  
  public getCustId: any;
  public acocuntNumbers: account [] = [];
  balance = sessionStorage.getItem("savingAccountBalance");
  acocuntType: any;
  public accounts: any;

  constructor(private accttxnSrv: AccountService) {
  }

  ngOnInit(): void {

    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);

      this.accttxnSrv.getCustAcct(this.getCustId).subscribe(data => {
        console.log(data);
        this.accounts = data;
        console.log(this.accounts);
      });

    }
  


}




