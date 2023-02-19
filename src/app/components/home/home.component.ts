import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

interface Insurance {
  img: string;
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pin:any;
address:any;
   insurances: Insurance[] = [
      {value: 'auto-0', viewValue: 'Auto',img:'../assets/auto.svg'},
      {value: 'home-1', viewValue: 'Home',img:'../assets/home.svg'},
      {value: 'life-2', viewValue: 'Life',img:'../assets/life.svg'},
      {value: 'business-3', viewValue: 'Business',img:'../assets/business-property.svg'},
      {value: 'renters-4', viewValue: 'Renters',img:'../assets/icon-renters.svg'},
      {value: 'condo-5', viewValue: 'Condo',img:'../assets/icon-condo.svg'}
    ];

    quote = new FormGroup({
      pincode: new FormControl("",Validators.required)
   })

  constructor(private http:HttpClient,private ser:AuthService) { }

  getQuote(){
    console.log(this.quote.value);
    this.pin=this.quote.value.pincode;
    this.ser.sendPin(this.pin)
  .subscribe( data => {
    this.ser.sendData(data)
    console.log(data);
    this.address=JSON.stringify(data);
      sessionStorage.setItem("address", this.address);
    })

    // this.ser.sendData(this.address)
      // var user = {'name':'John'};
      // sessionStorage.setItem('user', JSON.stringify(user));

}

  ngOnInit(): void {
  }
}