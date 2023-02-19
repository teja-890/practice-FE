import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { std } from '../models/std';
import { student } from '../models/student';
//import { student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
  private first = new BehaviorSubject('');
  second = this.first.asObservable();

   constructor(private http:HttpClient, private router:Router) {

   }
   
   sendData(data : any){
    this.first.next(data);
   }
  //  getData():Observable<any>{
  //   return this.subject.asObservable();
  //  }

    public create(u: student){
      return this.http.post("http://localhost:9990/signup",u);
    }

    public send(a: std){
      return this.http.post("http://localhost:9990/authenticate",a);
    }

    public sendVin(vin:any){
      return this.http.get("http://localhost:9990/info/"+vin);
    }

    public sendPin(pin:any){
      return this.http.get("http://localhost:9990/zipcode/"+pin);
    }
  
}