import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminRegisterComponent implements OnInit {

  public adminregisterForm: any;
  
  public user: User = {
    Id:0,
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    agree: false,
    role: '',
  }
  public submitted: boolean = false;
  constructor(private formBuilder : FormBuilder, private userSrv: UserService, private router: Router) { 
    
  }

  ngOnInit(): void {
  }


  onSubmit(adminregisterForm: any) {
    
    console.log("Enter submit...");
    console.log(adminregisterForm);
    
    if (adminregisterForm.valid) {
      this.submitted = true;
      console.log("Enter VALID...");
      this.user.role = "admin";
     this.userSrv.addadmin(this.user).subscribe(res => {
      console.log("Enter updates...");
        console.log(res);
        this.router.navigateByUrl("/adminlogin");
        console.log("The user has registered successfully");
      });
    } else {
      this.validate(adminregisterForm);
      console.log("The form cannot be submited");
    }
  }

  hasError(field: any) {
    return (field.invalid && field.touched && field.errors);
  }

  validate(form: any) {
    
    Object.keys(this.adminregisterForm.controls).forEach(field => {
      const control = this.adminregisterForm.controls[field];
      control.markAsTouched({ onlySelf: true });
    });
  }

}

