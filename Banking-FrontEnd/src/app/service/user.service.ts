import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8080/Admin";

  // Get admin User by email
  public getadminByEmail(email: string) {
    console.log(email); 
    console.log((this.url + '/getadminByEmail/' + `${email}`)); 
    return this.httpClient.get(this.url + '/getadminByEmail/' + `${email}`);
  }

      // add customer
  public addadmin(user: any) {
    console.log(this.httpClient.post(this.url + '/addadmin/', user));
    return this.httpClient.post(this.url + '/addadmin/', user);
  }
 
}
