import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankadminComponent } from './component/bankadmin/bankadmin.component';
import { BankuserComponent } from './component/bankuser/bankuser.component';
import { UserRegisterComponent } from './component/bankuser/userregister/userregister.component';
import { UsernavbarComponent } from './component/bankuser/usernavbar/usernavbar.component';
import { UserloginComponent } from './component/bankuser/userlogin/userlogin.component';
import { HeaderComponent } from './component/bankadmin/header/header.component';
import { FooterComponent } from './component/bankadmin/footer/footer.component';
import { CustomerAuthService } from './component/bankuser/auth/auth.service';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountopenComponent } from './component/bankuser/accounts/accountopen/accountopen.component';
import { CustomerHomeComponent } from './component/bankuser/userhome/userhome.component';
import { AccountsModule } from './component/bankuser/accounts/accounts.module';
import { ApprovalsModule } from './component/bankadmin/Approvals/approvals.module';
import { FundsTransferComponent } from './component/bankuser/funds-transfer/funds-transfer.component';
import { ChequeRequestComponent } from './component/bankuser/cheque-request/cheque-request.component';
import { AdminHomeComponent } from './component/bankadmin/adminhome/adminhome.component';
import { AdminnavbarComponent } from './component/bankadmin/adminnavbar/adminnavbar.component';
import { AdminloginComponent } from './component/bankadmin/adminlogin/adminlogin.component';
import { AdminRegisterComponent } from './component/bankadmin/adminregister/adminregister.component';
import { AuthService } from './component/bankadmin/auth/auth.service';
import { CommonModule} from '@angular/common';
import { ProfileComponent } from './component/bankuser/profile/profile.component';
import { UserblockComponent } from './component/bankadmin/userblock/userblock.component';
import { EditprofileComponent } from './component/bankuser/editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    BankadminComponent,
    BankuserComponent,
    UserRegisterComponent,
    UsernavbarComponent,
    UserloginComponent,
    HeaderComponent,
    FooterComponent,
    CustomerHomeComponent,
    FundsTransferComponent,
    ChequeRequestComponent,
    AdminHomeComponent,
    AdminnavbarComponent,
    AdminloginComponent,
    AdminRegisterComponent,
    ProfileComponent,
    UserblockComponent,
    EditprofileComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    AccountsModule,
    ApprovalsModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [CustomerAuthService,CustomerService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
