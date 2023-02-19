import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { std } from 'src/app/models/std';
import { student } from 'src/app/models/student';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  detail:any;
  details:student[]=[];
  b: std = new std("","");
  constructor(private router:Router,private http:HttpClient,private ser:AuthService) { }

   name!: string;
   password!: string;
   responsedata:any;


  login = new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
 })

  ngOnInit(){
   
  }

  submit() {
   
    this.ser.send(this.b)
        .subscribe( data => {
          console.log(data);

          if(data!=null){
            this.responsedata=data;
            localStorage.setItem('token',this.responsedata.jwttoken);
            this.router.navigate(['/home']);
          }
          else{
            alert("invalid credentials");
          }
        });
       
 }


}
