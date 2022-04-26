import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-cheques-approve',
  templateUrl: './cheques-approve.component.html',
  styleUrls: ['./cheques-approve.component.css']
})
export class ChequesApproveComponent implements OnInit {

  public chequeRec: any
  
  public status: any;
  constructor(private adminSrv: AdminService) { }

  ngOnInit(): void {

    this.status = "submitted";
    this.adminSrv.getChequeApproval(this.status).subscribe((res: any) => {

      this.chequeRec = res;
      console.log(this.chequeRec);
    });

  }
  approved(item: any) {
    
    item.status = "approved";
    this.adminSrv.updatechequeByStatusId(item).subscribe(res => {
      console.log(res);
         });    
    location.reload();
  }
  rejected(item: any) {
    item.status = "rejected";
    this.adminSrv.updatechequeByStatusId(item).subscribe(res => {
      console.log(res);
        });  
    location.reload();  
  }


}

