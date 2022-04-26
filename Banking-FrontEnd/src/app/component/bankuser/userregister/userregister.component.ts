import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserRegisterComponent implements OnInit {

  public form: any ;

  public customer: Customer = {
    firstName:'',
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
    customerId:0,
    status:'',
   createdDate : new Date()
  }
  public submitted:boolean = false;
  constructor(private custSrv:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(form:any) {

    console.log(form);
    console.log(form.valid);
    if(form.valid){
      this.submitted = true;
      
      this.customer.status = 'submitted' ;
      this.custSrv.addcustomer(this.customer).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl("/userlogin");
        console.log("The user has registered successfully");
      });      
    } else{
      this.validate(form);
      console.log("The form cannot be submited");
    }    
  }

  hasError(field:any) {
    return (field.invalid && field.touched && field.errors);
  }

  validate(form:any){
    // console.log(form);
    // console.log(form.controls);
     Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true});
      });
  }
  
}

