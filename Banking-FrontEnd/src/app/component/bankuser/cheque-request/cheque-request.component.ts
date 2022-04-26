import { ChequeRequest } from './../../../model/ChequeRequest.model';
import { Transaction } from 'src/app/model/Transaction.model';
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
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-cheque-request',
  templateUrl: './cheque-request.component.html',
  styleUrls: ['./cheque-request.component.css']
})
export class ChequeRequestComponent implements OnInit {

  public customers: any;
  public requestForm: FormGroup;
  public getCustId: any;
  public cfirstName: any;
  public clastName: any;
  public cName: any;
  public trans: any = '';
  selected = "";
  public acctlist: any;
  public acctgetdata: any;
  public fetchaccttype: any;
  public fetchacctbranch: any;
  public fetchcurrency: any;


  constructor(private formBuilder: FormBuilder, private txnSrv: TransactionService, private router: Router, private acctSrv: AccountService) {
    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);

    this.requestForm = this.formBuilder.group({
      accttype: new FormControl('', []),
      accountNo: new FormControl('', [Validators.required]),
      acctbranch: new FormControl('', []),
      currency: new FormControl('', []),
      status: new FormControl('', []),
      description: new FormControl('', [Validators.required]),
      custName: new FormControl({ value: this.cName }),
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

    this.requestForm.patchValue({ customerId: this.getCustId });
    this.requestForm.patchValue({ custName: this.cName });


    this.acctSrv.getAcctId(this.getCustId).subscribe(res => {
      this.acctlist = res;
      console.log("List of Accts" + this.acctlist)
    });
  }

  get form() {
    return this.requestForm.controls;
  }

  get accountNo() {
    //return this.requestForm.get('accountNo');
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
      this.requestForm.patchValue({ accttype: this.fetchaccttype });
      this.requestForm.patchValue({ acctbranch: this.fetchacctbranch });
      this.requestForm.patchValue({ currency: this.fetchcurrency });

    });

  }

  public onSubmit(depositForm: any) {

    console.log("Entering ...");
    this.requestForm.patchValue({ customerId: this.getCustId });
    this.requestForm.patchValue({ status: 'submitted' });
    console.log(this.requestForm.value);

    if (depositForm.valid) {
      this.txnSrv.chequerequest(this.requestForm.value).subscribe(request => {
        console.log(request);
        this.router.navigateByUrl("/userhome");
      });
    }
  }
}