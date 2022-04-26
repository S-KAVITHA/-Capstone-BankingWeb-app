import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-userblock',
  templateUrl: './userblock.component.html',
  styleUrls: ['./userblock.component.css']
})
export class UserblockComponent implements OnInit {

  public customerRec: any
  
  public status: any;
  constructor(private adminSrv: AdminService) { }

  ngOnInit(): void {

    this.status = "approved";
    this.adminSrv.getCustApproval(this.status).subscribe((res: any) => {

      this.customerRec = res;
      console.log(this.customerRec);
    });

  }
  blocked(item: any) {
    
    item.status = "blocked";
    this.adminSrv.updatecustByStatusId(item).subscribe(res => {
      console.log(res);
      
    });   
    location.reload(); 

  }
}
