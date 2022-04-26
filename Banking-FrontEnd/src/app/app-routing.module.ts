import { AccountsModule } from './component/bankuser/accounts/accounts.module';
import { AccountsRoutingModule } from './component/bankuser/accounts/accounts-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChequeRequestComponent } from './component/bankuser/cheque-request/cheque-request.component';
import { UserRegisterComponent } from './component/bankuser/userregister/userregister.component';
import { UsernavbarComponent } from './component/bankuser/usernavbar/usernavbar.component';
import { UserloginComponent } from './component/bankuser/userlogin/userlogin.component';
import { HeaderComponent } from './component/bankadmin/header/header.component';
import { FooterComponent } from './component/bankadmin/footer/footer.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CustomerHomeComponent } from './component/bankuser/userhome/userhome.component';
import { FundsTransferComponent } from './component/bankuser/funds-transfer/funds-transfer.component';
import { AdminHomeComponent } from './component/bankadmin/adminhome/adminhome.component';
import { AdminnavbarComponent } from './component/bankadmin/adminnavbar/adminnavbar.component';
import { AdminloginComponent } from './component/bankadmin/adminlogin/adminlogin.component';
import { AdminRegisterComponent } from './component/bankadmin/adminregister/adminregister.component';
import { ProfileComponent } from './component/bankuser/profile/profile.component';
import { UserblockComponent } from './component/bankadmin/userblock/userblock.component';
import { EditprofileComponent } from './component/bankuser/editprofile/editprofile.component';


const routes: Routes = [
  { path:'userlogin',  component: UserloginComponent },
  { path:'userregister', component:UserRegisterComponent},
  { path:'usernavbar',component:UsernavbarComponent },
  { path:'userhome',component:CustomerHomeComponent },
  { path:'footer',component:FooterComponent },
  { path:'header',component:HeaderComponent },
  { path:'transfer',component:FundsTransferComponent },
  { path:'request',component:ChequeRequestComponent },
  { path:'profile',component:ProfileComponent },
  { path:'accounts', loadChildren: ()=> import('./component/bankuser/accounts/accounts-routing.module').then(m=> m.AccountsRoutingModule)},
  
  { path:'adminhome',component:AdminHomeComponent },
  { path:'adminnavbar',component:AdminnavbarComponent },
  { path:'adminlogin',component:AdminloginComponent },
  { path:'adminregister',component:AdminRegisterComponent },
  { path:'blockuser',component:UserblockComponent },
  { path:'editprofile',component:EditprofileComponent },
  { path:'approvals', loadChildren: ()=> import('./component/bankadmin/Approvals/approvals-routing.module').then(m=> m.ApprovalsRoutingModule)},
  
  { path:'**', component:NotFoundComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes), AccountsRoutingModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
