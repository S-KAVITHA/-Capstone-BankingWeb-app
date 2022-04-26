import { Transaction } from './../../../../model/Transaction.model';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { TransactionService } from 'src/app/service/transaction.service';
import { AccountService } from 'src/app/service/account.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  public customers: any;
  public withdrawForm: FormGroup;
  public getCustId: any;
  public trans: any = '';
  public selected = "";
  public acctlist: any;
  public acctgetdata: any;
  public fetchaccttype: any;
  public fetchacctbranch: any;
  public fetchcurrency: any;
  public cfirstName: any;
  public clastName: any;
  public cName: any;



  constructor(private formBuilder: FormBuilder, private acctSrv: AccountService, private txnSrv: TransactionService, private router: Router) {
    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);
    this.withdrawForm = this.formBuilder.group({
      accttype: new FormControl('', []),
      accountNo: new FormControl('', [Validators.required]),
      acctbranch: new FormControl('', []),
      currency: new FormControl('', []),
      amount: new FormControl('', [Validators.required]),
      custName: new FormControl({ value: this.cName }),
      txntype: new FormControl('', []),
      status: new FormControl('', []),
      customerId: new FormGroup({
        customerId: new FormControl({ value: this.getCustId, disabled: false })
      })
    });
  }


  ngOnInit(): void {

    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);

    this.cfirstName = sessionStorage.getItem('firstName');
    this.clastName = sessionStorage.getItem('lastName');
    console.log(this.cfirstName);
    console.log(this.clastName);

    this.cName = this.cfirstName + " " + this.clastName;
    console.log(this.cName);

    this.withdrawForm.patchValue({ customerId: this.getCustId });
    this.withdrawForm.patchValue({ custName: this.cName });


    this.acctSrv.getAcctId(this.getCustId).subscribe(res => {
      this.acctlist = res;
      console.log("List of Accts" + this.acctlist)
    });

  }


  hasError(field: any) {
    return (field.invalid && field.touched && field.errors);
  }

  get form() {
    return this.withdrawForm.controls;
  }

  get amount() {
    return this.form['amount'];
  }

  get accountNo() {
    //return this.withdrawForm.get('accountNo');
    return this.form['accountNo'];
  }

  public update(e: any) {
    this.selected = e.target.value
    console.log("selected " + this.selected);

    
    this.acctSrv.getAccount(e.target.value).subscribe((acctdata: any) => {
      this.acctgetdata = acctdata;
      console.log(acctdata);
      this.fetchaccttype = (this.acctgetdata.accttype);
      this.fetchacctbranch = (this.acctgetdata.acctbranch);
      this.fetchcurrency = (this.acctgetdata.currency)
      console.log(this.fetchaccttype);
      this.withdrawForm.patchValue({ accttype: this.fetchaccttype });
      this.withdrawForm.patchValue({ acctbranch: this.fetchacctbranch });
      this.withdrawForm.patchValue({ currency: this.fetchcurrency });

    });

  //}

 // public onInput(event: any) {
  //  console.log("On input has triggered for " + event.target.value);

  }

  public onSubmit(withdrawForm: any) {

    console.log("Entering ...");

    this.withdrawForm.patchValue({ customerId: this.getCustId });
    this.withdrawForm.patchValue({ txntype: 'withdraw' });
    this.withdrawForm.patchValue({ status: 'submitted' });
    console.log(this.withdrawForm.value);

    if (withdrawForm.valid) {

      this.txnSrv.withdrawacct(this.withdrawForm.value).subscribe(trans => {
        console.log(trans);
        this.router.navigateByUrl("/userhome");

      });
    }
  }

}