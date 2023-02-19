import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { GetQuoteComponent } from './components/get-quote/get-quote.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
   { path: "", component: LoginComponent},
//{ path: "", component: SidenavComponent},
  { path: "home", component: HomeComponent},
  { path: "register", component: SignupComponent},
  { path: "quote", component: GetQuoteComponent},
  { path: "logout", component: LogoutComponent},
  { path: "dialog", component: DialogComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
