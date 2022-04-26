import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { CustomerAuthService } from '../auth/auth.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

 public role :any; 
 public loginForm : FormGroup;
 public message:string="";
 private formSubmitAttempt: boolean | undefined;

constructor(private formBuilder : FormBuilder,private userSrv:CustomerService, private router:Router, private authService: CustomerAuthService) {
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required , Validators.minLength(6), Validators.maxLength(20), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      rememberme:['', Validators.required]
     
    });
    
  }

  ngOnInit() {
    sessionStorage.removeItem("customerID");

  }

  public onSubmit(loginForm:any) {

    console.log("Entering ...");
    if(loginForm.valid){
      console.log(this.email.value);
         this.userSrv.getUserByEmail(this.email.value).subscribe((res:any)=>{
              console.log(res);
        if(res!=null && res!=undefined && res.length!=0 ) {

          console.log(res[0].password);
          console.log(this.password.value);
          console.log(res[0].password);
console.log(this.password.value);
          if(res[0].password === this.password.value && res[0].emailId == this.email.value && res[0].status == 'approved') { 
            
            sessionStorage.setItem("customerID",(res[0].customerId));
            console.log("Set ID"+ res[0].customerId);
           
            sessionStorage.setItem("firstName",(res[0].firstName));
            sessionStorage.setItem("lastName",(res[0].lastName)); 
            sessionStorage.setItem("emailId",(res[0].emailId)); 
            sessionStorage.setItem("address",(res[0].address)); 
            sessionStorage.setItem("city",(res[0].city)); 
            sessionStorage.setItem("state",(res[0].state)); 
            sessionStorage.setItem("zipcode",(res[0].zipcode)); 
            sessionStorage.setItem("country",(res[0].country)); 
            sessionStorage.setItem("birthDate",(res[0].birthDate)); 

            console.log("Set ID"+ res[0].customerId);
            
            this.authService.login(this.loginForm.value);
            this.formSubmitAttempt = true;
           // this.router.navigateByUrl("/home");
         
          } else {
            this.message = "Not a valid customer credentails";
            // console.log("User password does not match");          
          }
        } else {
          this.message = "Not a valid customer credentails";
          // console.log("User password does not match");          
        }
        
      });
    } else{
      console.log("Invalid Form !");
      this.validate(loginForm);
      
    }
  }

  public validate(form:any){
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true});
      } else{
        this.validate(control);
      }
    });
  }

  hasError(fieldName:string) {
    let field = this.loginForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.loginForm.controls;
  }

  get email() {
    return this.form['email'];
  }

  get password() {
    return this.form['password'];
  }

  get rememberme() {
    return this.form['rememberme'];
  }
}
