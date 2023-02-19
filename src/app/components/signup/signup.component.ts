import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { student } from 'src/app/models/student';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  u: student = new student(0,"","","");

  constructor(private ser : AuthService) { }

  signup = new FormGroup({
    username: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
 })

  ngOnInit(): void {
  }


  submit(): void {
    this.ser.create(this.u)
        .subscribe( data => {
          alert("data added to the list successfully.");
        });
};
  
}
