import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { GetQuoteComponent } from './components/get-quote/get-quote.component';

import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';

import {MatSelectModule} from '@angular/material/select';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { RatingComponent } from './components/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    GetQuoteComponent,
    DialogComponent,
    SidenavComponent,
    HomeComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatFormFieldModule,
    MatInputModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,

    MatListModule,
    MatStepperModule,

    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSidenavModule,

    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
