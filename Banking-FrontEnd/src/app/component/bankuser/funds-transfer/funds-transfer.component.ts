import { Transaction } from 'src/app/model/Transaction.model';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { TransactionService } from 'src/app/service/transaction.service';
import { CustomerService } from 'src/app/service/customer.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-funds-transfer',
  templateUrl: './funds-transfer.component.html',
  styleUrls: ['./funds-transfer.component.css']
})
export class FundsTransferComponent implements OnInit {

  public customers: any;
  public transferForm: FormGroup;
  public getCustId: any;
  public trans: any = '';
  selected = "----"
  public acctlist: any;
  public message:string="";
  public cfirstName: any;
  public clastName: any;
  public cName: any;
  public acctFromdata: any;
  public acctTodata: any;
  public fetchFromtype:any;
  public fetchFrombranch:any ;
  public fetchFromccy: any;
  public fetchTotype : any;
  public fetchTobranch : any;
  public fetchToccy : any;


  constructor(private formBuilder: FormBuilder, private txnSrv: TransactionService, private router: Router, private acctSrv: AccountService) {
    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);
    this.transferForm = this.formBuilder.group({

      transferId:new FormControl('', []),
      fromAcctNo: new FormControl('', [Validators.required]),
      fromAccbranch:new FormControl('', []),
      fromAcctype: new FormControl('', []),
      toAcctNo: new FormControl('', [Validators.required]),
      toAccbranch:new FormControl('', []),
      toAcctype:new FormControl('', []),
      toAccCCY: new FormControl('', []),
      fromAccCCY:new FormControl('', []),
      amount: new FormControl('', [Validators.required]),
      createdDate: new FormControl('', []),
      custName: new FormControl('', []), 
      status: new FormControl('', []),
      customerId: new FormGroup({
        customerId: new FormControl({ value: this.getCustId, disabled: false })
      })
    });

  }

  ngOnInit(): void {
    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);
   


    this.acctSrv.getacctlist().subscribe(res => {
      this.acctlist = res;
      console.log("List of Accts" + this.acctlist)
    });

  }

  public updateFrom(e: any) {
    this.selected = e.target.value
    console.log("selected " + this.selected);
  
    this.acctSrv.getAccount(e.target.value).subscribe((acctdata: any) => {
      this.acctFromdata = acctdata;
      console.log(this.acctFromdata);
      this.fetchFromtype = (this.acctFromdata.accttype);
      this.fetchFrombranch = (this.acctFromdata.acctbranch);
      this.fetchFromccy = (this.acctFromdata.currency)
 
      this.transferForm.patchValue({ fromAcctype: this.fetchFromtype });
      this.transferForm.patchValue({ fromAccbranch: this.fetchFrombranch });
      this.transferForm.patchValue({ fromAccCCY: this.fetchFromccy });

    });

  }


  public updateTo(e: any) {
    this.selected = e.target.value
    console.log("selected " + this.selected);
  
    this.acctSrv.getAccount(e.target.value).subscribe((acctdata: any) => {
      this.acctFromdata = acctdata;
      console.log(this.acctFromdata);
      this.fetchTotype = (this.acctFromdata.accttype);
      this.fetchTobranch = (this.acctFromdata.acctbranch);
      this.fetchToccy = (this.acctFromdata.currency)
 
      this.transferForm.patchValue({ toAcctype: this.fetchTotype });
      this.transferForm.patchValue({ toAccbranch: this.fetchTobranch });
      this.transferForm.patchValue({ toAccCCY: this.fetchToccy });

    });

  }


  get form() {
    return this.transferForm.controls;
  }

  get amount() {
    return this.form['amount'];
  }

  get fromAcctNo() {
    return this.form['fromAcctNo'];
  }

  get toAcctNo() {
    return this.transferForm.get('toAcctNo');
  }
  get currency() {
    return this.form['currency'];
  }

  public onSubmit(transferForm: any) {

    console.log("Entering ...");
    this.transferForm.patchValue({ customerId: this.getCustId });
    this.transferForm.patchValue({ status: 'submitted' });
    this.cfirstName = sessionStorage.getItem('firstName');
    this.clastName = sessionStorage.getItem('lastName');
    console.log(this.cfirstName);
    console.log(this.clastName);

    this.cName = this.cfirstName + " " + this.clastName;
    console.log(this.cName);

    this.transferForm.patchValue({ customerId: this.getCustId });
    this.transferForm.patchValue({ custName: this.cName });

    console.log(this.transferForm.value);

    if (transferForm.valid) {
      this.txnSrv.fundstransfer(this.transferForm.value).subscribe(trans => {
        console.log("final" + trans);
        this.router.navigateByUrl("/userhome");
      });
    }
  }

}