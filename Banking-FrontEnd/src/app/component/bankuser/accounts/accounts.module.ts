import { AccountService } from '../../../service/account.service';
import { TransactionService } from '../../../service/transaction.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance/balance.component';
import { AccountopenComponent } from './accountopen/accountopen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component'; // <== add the imports!


@NgModule({
  declarations: [
    BalanceComponent,
    AccountopenComponent,
    WithdrawComponent,
    DepositComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AccountService ,TransactionService],
})
export class AccountsModule { }
