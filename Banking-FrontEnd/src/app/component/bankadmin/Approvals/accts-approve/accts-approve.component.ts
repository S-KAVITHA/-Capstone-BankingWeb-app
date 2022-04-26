import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-accts-approve',
  templateUrl: './accts-approve.component.html',
  styleUrls: ['./accts-approve.component.css']
})
export class AcctsApproveComponent implements OnInit {

  public acctRec: any

  public status: any;
  constructor(private adminSrv: AdminService, private router: Router) { }

  ngOnInit(): void {

    this.status = "submitted";
    this.adminSrv.getAcctApproval(this.status).subscribe((res: any) => {

      this.acctRec = res;
      console.log(this.acctRec);
    });

  }

  approved(item: any) {

    item.status = "approved";
    this.adminSrv.updateacctByStatusId(item).subscribe(res => {
      console.log(res);

    });
    location.reload();
  }

  rejected(item: any) {
    item.status = "rejected";
    this.adminSrv.updateacctByStatusId(item).subscribe(res => {
      console.log(res);

    });
    location.reload();
  }
}