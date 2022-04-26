import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Router, RouterModule } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { AuthService } from 'src/app/component/bankadmin/auth/auth.service';

@Component({
  selector: 'app-customers-approve',
  templateUrl: './customers-approve.component.html',
  styleUrls: ['./customers-approve.component.css']
})
export class CustomersApproveComponent implements OnInit {


  public customerRec: any
  
  public status: any;
  constructor(private adminSrv: AdminService,private router:Router,private authService: AuthService) { }

  ngOnInit(): void {

    this.status = "submitted";
    this.adminSrv.getCustApproval(this.status).subscribe((res: any) => {

      this.customerRec = res;
      console.log(this.customerRec);
    });

  }


  approved(item: any) {
    
    item.status = "approved";
    this.adminSrv.updatecustByStatusId(item).subscribe(res => {
      console.log(res);
         });    
 
         location.reload();
    
  }


  rejected(item: any) {
    item.status = "rejected";
    this.adminSrv.updatecustByStatusId(item).subscribe(res => {
      console.log(res);
      
    }); 
    location.reload();
  }
 


}
