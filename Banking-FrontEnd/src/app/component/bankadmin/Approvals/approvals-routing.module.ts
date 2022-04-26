import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcctsApproveComponent } from './accts-approve/accts-approve.component';
import { TxnsApproveComponent } from './txns-approve/txns-approve.component';
import { TransfersApproveComponent } from './transfers-approve/transfers-approve.component';
import { ChequesApproveComponent } from './cheques-approve/cheques-approve.component';
import { CustomersApproveComponent } from './customers-approve/customers-approve.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'custapprove',component:CustomersApproveComponent },
  { path:'acctapprove',component:AcctsApproveComponent },
  { path:'txnapprove',component:TxnsApproveComponent },
  { path:'transferapprove',component:TransfersApproveComponent },
  { path:'chequeapprove',component:ChequesApproveComponent }
];
@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ApprovalsRoutingModule { }
