import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-txns-approve',
  templateUrl: './txns-approve.component.html',
  styleUrls: ['./txns-approve.component.css']
})
export class TxnsApproveComponent implements OnInit {

  public txnRec: any
  
  public status: any;
  constructor(private adminSrv: AdminService) { }

  ngOnInit(): void {

    this.status = "submitted";
    this.adminSrv.getTxnApproval(this.status).subscribe((res: any) => {

      this.txnRec = res;
      console.log(this.txnRec);
    });

  }
  approved(item: any) {
    
    item.status = "approved";
    this.adminSrv.updatetxnByStatusId(item).subscribe(res => {
      console.log(res);
          });    
          location.reload();

  }
  rejected(item: any) {
    item.status = "rejected";
    this.adminSrv.updatetxnByStatusId(item).subscribe(res => {
      console.log(res);
    }); 
    location.reload();   
  }

}

