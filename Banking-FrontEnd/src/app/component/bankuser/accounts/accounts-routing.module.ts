import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance/balance.component';
import { AccountopenComponent } from './accountopen/accountopen.component';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component'; // <== add the imports!
import { AccountsComponent } from './accounts.component';


const routes: Routes = [

  { path:'accounts',component:AccountsComponent },
{ path:'acctbalance',component:BalanceComponent },
{ path:'acctopen',component:AccountopenComponent },
{ path:'deposit',component:DepositComponent },
{ path:'withdraw',component:WithdrawComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AccountsRoutingModule { }
