import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AsyncLocalStorage } from 'async_hooks';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {

       
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  reactiveForm: any;
  km:number=0;
  age:number=0;

  show:boolean=false;
  appear:boolean=false;
  responsedata:any;
  vin:any;
  obj:any;
  address:any;
  responsedata1:any;

  add:any="";
  pincode:any;
  district:any;
  state:any;
  
  constructor(private _formBuilder: FormBuilder,public dialog : MatDialog,private http:HttpClient,private ser:AuthService) {
   
  }


  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   fname: ['', Validators.required],
    //   lname: ['', Validators.required],
    //   email: ['', Validators.required],
    //   mobile: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   designation: ['', Validators.required],
    //   salary: ['', Validators.required]
    // });
    // this.thirdFormGroup = this._formBuilder.group({
    //   address: ['', Validators.required],
    //   pincode: ['', Validators.required],
    //   district: ['', Validators.required],
    //   state: ['', Validators.required]
    // });
    // this.fourthFormGroup = this._formBuilder.group({
    //   a: ['', Validators.required],
    //   p: ['', Validators.required]
    // });

    this.firstFormGroup = this._formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
      mobile: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      designation: [''],
      salary: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      address: [''],
      pincode: [''],
      district: [''],
      state: ['']
    });
    this.fourthFormGroup = this._formBuilder.group({
      distance: [''],
      carage: [''],
      vin: [''],
      // fuelType: [''],
      // price: [''],
      // engine: ['']
    });
    
    this.add = sessionStorage.getItem('address');
    this.add = JSON.parse(this.add) 
    console.log(this.add);
    console.log(this.add.zipcode);
    this.pincode=this.add.zipcode;
    this.district=this.add.district;
    this.state=this.add.state;


    this.ser.second.subscribe(msg => {console.log(msg);});
  


    // this.add = sessionStorage.getItem('user');
    // console.log(this.add);
    
  }
  
  submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
      console.log(this.thirdFormGroup.value);
      console.log(this.fourthFormGroup.value);
  }

  keyup(x:any) {
    console.log(x.target.value);
  }

  openform(){
    let ab = this.dialog.open(DialogComponent);
    ab.afterClosed().subscribe((result:any) => {
        console.log(result);
    this.km=result[0];
    this.age=result[1];
  }) 
} 
check(){
  console.log(this.fourthFormGroup.value.vin);
  this.vin=this.fourthFormGroup.value.vin;
  this.ser.sendVin(this.vin)
  .subscribe( data => {
    console.log(data);
    this.appear=true;

    if(data!=null){
      // this.responsedata=JSON.stringify(data);
      // localStorage.setItem("testJSON", this.responsedata);
      // this.obj = JSON.parse(localStorage.getItem('testJSON') || '{}');
      // console.log(this.obj.info);
      // this.responsedata1=JSON.stringify(this.obj.info);
      this.responsedata=JSON.stringify(data);
      sessionStorage.setItem("test", this.responsedata);
      this.obj = sessionStorage.getItem('test');
    this.obj= JSON.parse(this.obj)
    console.log(this.obj);
    console.log(this.obj.fuelType);
    console.log(this.obj.engineCapacity);
    console.log(this.obj.info);
    this.responsedata1=this.obj.info;
    }
    else{
      alert("invalid credentials");
    }
  });

 
}

}