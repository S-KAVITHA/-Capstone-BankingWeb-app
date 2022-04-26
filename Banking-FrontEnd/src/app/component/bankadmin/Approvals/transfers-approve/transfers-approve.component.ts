import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-transfers-approve',
  templateUrl: './transfers-approve.component.html',
  styleUrls: ['./transfers-approve.component.css']
})
export class TransfersApproveComponent implements OnInit {

  public transferRec: any
  
  public status: any;
  constructor(private adminSrv: AdminService) { }

  ngOnInit(): void {

    this.status = "submitted";
    this.adminSrv.getTransferApproval(this.status).subscribe((res: any) => {

      this.transferRec = res;
      console.log(this.transferRec);
    });

  }
  approved(item: any) {
    
    item.status = "approved";
    this.adminSrv.updatetransferByStatusId(item).subscribe(res => {
      console.log(res); 
    });    
    location.reload();
  }
  rejected(item: any) {
    item.status = "rejected";
    this.adminSrv.updatetransferByStatusId(item).subscribe(res => {
      console.log(res);
    });    
    location.reload();
  }
}

