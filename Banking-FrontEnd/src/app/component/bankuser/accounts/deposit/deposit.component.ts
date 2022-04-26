import { Transaction } from './../../../../model/Transaction.model';
import { Component, OnInit } from '@angular/core';
import { account } from 'src/app/model/account.model';
import { Customer } from 'src/app/model/customer.model';
import { TransactionService } from 'src/app/service/transaction.service';
import { CustomerService } from 'src/app/service/customer.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})

export class DepositComponent implements OnInit {

  public customers: any;
  public depositForm: FormGroup;
  public getCustId: any;
  public cfirstName: any;
  public clastName: any;
  public cName: any;
  public trans: any = '';
  selected = ""
  public acctlist: any;
  public acctgetdata: any;
  public fetchaccttype: any;
  public fetchacctbranch: any;
  public fetchcurrency: any;

  constructor(private formBuilder: FormBuilder, private txnSrv: TransactionService, private router: Router, private acctSrv: AccountService) {
    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);

    this.depositForm = this.formBuilder.group({
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

    this.cfirstName = sessionStorage.getItem('firstName');
    this.clastName = sessionStorage.getItem('lastName');
    console.log(this.cfirstName);
    console.log(this.clastName);

    this.cName = this.cfirstName + " " + this.clastName;
    console.log(this.cName);

    this.depositForm.patchValue({ customerId: this.getCustId });
    this.depositForm.patchValue({ custName: this.cName });


    this.acctSrv.getAcctId(this.getCustId).subscribe(res => {
      this.acctlist = res;
      console.log("List of Accts" + this.acctlist)
    });
  }


  hasError(field: any) {
    return (field.invalid && field.touched && field.errors);
  }

  get form() {
    return this.depositForm.controls;
  }

  get amount() {
    return this.form['amount'];
  }

  get accountNo() {
    return this.depositForm.get('accountNo');
  }


  public update(e: any) {
    this.selected = e.target.value
    console.log("selected " + this.selected);
    // }

    // public onInput(event: any) {
    //console.log("On input has triggered for " + event.target.value);

    this.acctSrv.getAccount(e.target.value).subscribe((acctdata: any) => {
      this.acctgetdata = acctdata;
      console.log(acctdata);
      this.fetchaccttype = (this.acctgetdata.accttype);
      this.fetchacctbranch = (this.acctgetdata.acctbranch).trim();
      this.fetchcurrency = (this.acctgetdata.currency)
      console.log(this.fetchaccttype);
      console.log(this.fetchacctbranch);
      this.depositForm.patchValue({ accttype: this.fetchaccttype });
      this.depositForm.patchValue({ acctbranch: this.fetchacctbranch });
      this.depositForm.patchValue({ currency: this.fetchcurrency });
      console.log(this.depositForm);
    });

  }

  public onSubmit(depositForm: any) {

    console.log("Entering ...");

    this.depositForm.patchValue({ customerId: this.getCustId });
    this.depositForm.patchValue({ txntype: 'deposit' });
    this.depositForm.patchValue({ status: 'submitted' });
    console.log(this.depositForm.value);

    if (depositForm.valid) {
      console.log("valid");
      this.txnSrv.depositacct(this.depositForm.value).subscribe(trans => {
        console.log(trans);
        this.router.navigateByUrl("/userhome");
      });
    }
  }

  
  public validate(depositForm:any){
    Object.keys(depositForm.controls).forEach(field => {
      const control = depositForm.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true});
      } else{
        this.validate(control);
      }
    });
  }

  

}