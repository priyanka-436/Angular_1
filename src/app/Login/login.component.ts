import { Component , OnInit} from '@angular/core';
 import {FormBuilder , FormGroup,Validators} from '@angular/forms';
 import { Router } from "@angular/router";



@Component({
    selector:'login',
    templateUrl:'./login.html'
})

export class loginComponent implements OnInit{
    loginForm : FormGroup
    public error;
 constructor( private formBuilder : FormBuilder, private router : Router) {
 }
 ngOnInit(){
    this.loginForm =  this.formBuilder.group({
       'username':['',Validators.required] ,
       'password':['',Validators.required]

    })
 }

 onSubmit = () => {
     if(this.loginForm.value.username=="1234" && this.loginForm.value.password=="qwerty"){
        localStorage.setItem('user',"Robin" );
        this.router.navigate(['/users'])

     }
     else {
        this.loginForm.value.username='';
        this.loginForm.value.password='';
         this.error="In valid username or password"
     }
 }
}