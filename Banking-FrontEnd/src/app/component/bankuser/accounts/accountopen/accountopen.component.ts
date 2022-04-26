import { account } from './../../../../model/account.model';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { AccountService } from 'src/app/service/account.service';
import { CustomerService } from 'src/app/service/customer.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-accountopen',
  templateUrl: './accountopen.component.html',
  styleUrls: ['./accountopen.component.css']
})
export class AccountopenComponent implements OnInit {

  public customers: any;
  public acctopenForm: FormGroup;
  public getCustId: any;
  public cfirstName: any;
  public clastName: any;
  public cName: any;


  constructor(private formBuilder: FormBuilder, private acctstxnSrv: AccountService, private router:Router) {
    this.getCustId = sessionStorage.getItem('customerID');
    console.log("cust" + this.getCustId);
    this.acctopenForm = this.formBuilder.group({
      accttype: new FormControl('', []),
      acctbranch: new FormControl('', []),
      currency: new FormControl('', []),
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
    this.cfirstName = sessionStorage.getItem('firstName');
    this.clastName = sessionStorage.getItem('lastName');
    console.log(this.cfirstName);
    console.log(this.clastName);
    console.log(this.clastName);

    this.cName = this.cfirstName + " " + this.clastName;
    console.log(this.cName);

    
    this.acctopenForm.patchValue({ customerId: this.getCustId });
    this.acctopenForm.patchValue({ custName: this.cName });

  }

  public onSubmit(acctopenForm: any) {

    console.log("Entering ...");

    this.acctopenForm.patchValue({customerId: this.getCustId });
    

    if (acctopenForm.valid) {

      this.acctopenForm.patchValue({ customerId: this.getCustId });
      this.acctopenForm.patchValue({ custName: this.cName });
      this.acctopenForm.patchValue({ status: 'submitted' });
      console.log(this.acctopenForm.value);
      this.acctstxnSrv.addaccount(this.acctopenForm.value).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/userhome");
        console.log("The user has registered successfully");
      });
    }
  }


  public validate(acctopenForm:any){
    Object.keys(acctopenForm.controls).forEach(field => {
      const control = acctopenForm.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true});
      } else{
        this.validate(control);
      }
    });
  }

  hasError(fieldName:string) {
    let field = this.acctopenForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.acctopenForm.controls;
  }

  get currency() {
    return this.form['currency'];
  }
  get acctbranch() {
    return this.form['acctbranch'];
  }

  get accttype() {
    return this.form['accttype'];
  }
}