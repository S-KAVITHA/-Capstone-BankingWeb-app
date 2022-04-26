import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

 public role :any; 
 public adminloginForm : FormGroup;
 public message:string="";
 private formSubmitAttempt: boolean | undefined;

constructor(private formBuilder : FormBuilder,private userSrv:UserService, private router:Router, private authService: AuthService) {
    this.adminloginForm = this.formBuilder.group({
      emailId : ['', [Validators.required , Validators.minLength(6), Validators.maxLength(20), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      rememberme:['', Validators.required]
     
    });
  }

  ngOnInit() {
    sessionStorage.removeItem("userRole");
  }

  public onSubmit(adminloginForm:any) {

     console.log("Entering ...");
    if(adminloginForm.valid){
         this.userSrv.getadminByEmail(this.emailId.value).subscribe((res:any)=>{
              
        if(res!=null && res!=undefined && res.length!=0 ) {
          let getuserrole = res[0].role ;
          console.log(getuserrole);

          console.log(res);

          if(res[0].password === this.password.value && res[0].emailId == this.emailId.value) { 
              
            console.log("Set Role"+ res[0].role);
            sessionStorage.setItem("userRole",(res[0].role));

            this.authService.login(this.adminloginForm.value);
            this.formSubmitAttempt = true;
            console.log("success")
            this.router.navigate(['/adminhome']);
         
          } else {
            this.message = "Not a valid admin credentails";
                  
          }
        } else {
          this.message = "Not a valid admin credentails";
        }
      });
    } else{
      
      this.validate(adminloginForm);
    } 
  }

  public validate(form:any){
    Object.keys(this.adminloginForm.controls).forEach(field => {
      const control = this.adminloginForm.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true});
      } else{
        this.validate(control);
      }
    });
  }

  hasError(fieldName:string) {
    let field = this.adminloginForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.adminloginForm.controls;
  }

  get emailId() {
    return this.form['emailId'];
  }

  get password() {
    return this.form['password'];
  }

  get rememberme() {
    return this.form['rememberme'];
  }
}
