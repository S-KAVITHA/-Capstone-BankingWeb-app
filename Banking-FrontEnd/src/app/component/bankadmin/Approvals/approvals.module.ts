import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalsComponent } from './approvals.component';
import { AcctsApproveComponent } from './accts-approve/accts-approve.component';
import { TxnsApproveComponent } from './txns-approve/txns-approve.component';
import { TransfersApproveComponent } from './transfers-approve/transfers-approve.component';
import { ChequesApproveComponent } from './cheques-approve/cheques-approve.component';
import { CustomersApproveComponent } from './customers-approve/customers-approve.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    AcctsApproveComponent,
    TxnsApproveComponent,
    TransfersApproveComponent,
    ChequesApproveComponent,
    CustomersApproveComponent,
    ApprovalsComponent,
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
 
})
export class ApprovalsModule { }
