import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
show:boolean=true;
num1:any;
num2:any;
num3:any;
years:any;
list:any[]=[];
  constructor(
  public dialogRef: MatDialogRef<DialogComponent>) { }

  form = new FormGroup({
    num1: new FormControl("",Validators.required),
    num2: new FormControl("",Validators.required)
 })

 submit(){
  console.log(this.form.value);
  var present = new Date();
  var given = new Date(this.form.value.num1);
  console.log(present);console.log(given);
  var p = present.getTime() - given.getTime();
  console.log(p);
  var days = Math.floor(p / (1000 * 3600 * 24));
  console.log(days);
  this.years=days/365;
  this.years=this.years.toFixed(2);
  console.log(this.years);
  this.num1=days;
  this.num2=this.form.value.num2;
  this.num3=parseInt(this.num1)*parseInt(this.num2);
  this.list.push(this.num3);
  this.list.push(this.years);
  console.log(this.list)
  this.dialogRef.close(this.list);
  this.show=false;
 }

  ngOnInit(): void {
  }

}
