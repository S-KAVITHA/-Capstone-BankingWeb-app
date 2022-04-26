import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class CustomerHomeComponent implements OnInit {

  public fName :any = ' ';
  public lName :any = ' ';

  constructor() { }

  ngOnInit(): void {

    this.fName =  sessionStorage.getItem("firstName");
    this.lName =  sessionStorage.getItem("lastName"); 
  }

}
