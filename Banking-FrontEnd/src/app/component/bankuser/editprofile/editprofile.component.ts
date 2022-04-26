import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer.model';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  public editform: any;

  public getCustId: any;
  public cfirstName: any;
  public clastName: any;
  public emailId: any;
  public address: any;
  public city: any;
  public state: any;
  public zipcode: any;
  public country: any;
  public birthDate: any;
  public statengSelect: any;
  public countryngSelect: any;
  public storeBdate: any;


  public customer: Customer = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    country: '',
    birthDate: 0,
    agree: false,
    role: '',
    customerId: 0,
    status: '',
    createdDate: new Date()
  }

  public submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private custSrv: CustomerService, private router: Router, private activeroute: ActivatedRoute) {

    this.editform = this.formBuilder.group({
      firstName: new FormControl('', []),
      lastName: new FormControl('', []),
      emailId: new FormControl('', []),
      password: new FormControl('', []),
      city: new FormControl('', []),
      address: new FormControl('', []),
      state: new FormControl('', []),
      zipcode: new FormControl('', []),
      country: new FormControl('', []),
      birthDate: new FormControl('', []),
      agree: new FormControl('', []),
      createdDate: new FormControl('', []),
      status: new FormControl('', []),

      customerId: new FormGroup({
        customerId: new FormControl({ value: this.getCustId, disabled: false })
      })
    });

  }

  ngOnInit(): void {

    console.log("Intialise");

    this.getCustId = sessionStorage.getItem('customerID');
    this.emailId = sessionStorage.getItem('emailId');
    console.log("address" + this.emailId);

    this.custSrv.getUserByEmail(this.emailId).subscribe((res: any) => {
      console.log("test" + res[0].birthDate);
      this.storeBdate = res[0].birthDate;

    this.editform = this.formBuilder.group({
      firstName: new FormControl(res[0].firstName),
      lastName: new FormControl(res[0].lastName),
      emailId: new FormControl(res[0].emailId),
      password: new FormControl(res[0].password),
      address: new FormControl(res[0].address),
      city: new FormControl(res[0].city),
      state: new FormControl(res[0].state),
      zipcode: new FormControl(res[0].zipcode),
      country: new FormControl(res[0].country),
      birthDate: new FormControl(res[0].birthDate),
      agree: new FormControl(res[0].agree),
      createdDate: new FormControl(res[0].createdDate),
      status: new FormControl(res[0].status),
      customerId: new FormControl(res[0].customerId)

    });


  });



  /*  this.address = sessionStorage.getItem('address');
    console.log("address" + this.address);
 
    this.city = sessionStorage.getItem('city');
    console.log("address" + this.city);
 
    this.state = sessionStorage.getItem('state');
    console.log("address" + this.state);
    this.statengSelect = this.state;
 
 
    this.zipcode = sessionStorage.getItem('zipcode');
    console.log("address" + this.zipcode);
 
    this.country = sessionStorage.getItem('country');
    console.log("address" + this.country);
    this.countryngSelect = this.country;
    */

}


onSubmit(form: any) {


  console.log(form.value.state);
  this.submitted = true;


  sessionStorage.setItem("emailId", (form.value.emailId));
  sessionStorage.setItem("address", (form.value.address));
  sessionStorage.setItem("city", (form.value.city));
  sessionStorage.setItem("state", (form.value.state));
  sessionStorage.setItem("zipcode", (form.value.zipcode));
  sessionStorage.setItem("country", (form.value.country));
  form.value.birthDate =  this.storeBdate;

  console.log(form.value);
  this.custSrv.updcustomer(form.value).subscribe(res => {
    console.log(res);
    this.router.navigateByUrl("/userhome");
    console.log("The user has registered successfully");
  });

}

hasError(field: any) {
  return (field.invalid && field.touched && field.errors);
}

validate(form: any) {
  // console.log(form);
  // console.log(form.controls);
  Object.keys(form.controls).forEach(field => {
    const control = form.controls[field];
    control.markAsTouched({ onlySelf: true });
  });
}

}

