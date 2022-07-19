import { Component, ɵɵpureFunction1 } from '@angular/core'
import {  FormGroup,FormControl,Validators } from '@angular/forms'
//import {Student} from './student'
@Component({
selector:"app-root",
templateUrl:"app.component.html",
//styleUrls: ['app.component.css'],
})


export  class AppComponent{
    loginForm=new FormGroup({
        user:new FormControl('',[Validators.required,
        Validators.minLength(5)]),
        password:new FormControl('',
        [Validators.required,
          Validators.minLength(4),
          Validators.maxLength(8), ]),
      
      email:new FormControl('',[Validators.email]),
      })
        loginUser(){
          console.log(this.loginForm.value)
        }
        get user(){
          return this.loginForm.get('user')
        }
        get password(){
          return this.loginForm.get('password')
        }
        
        get email(){
          return this.loginForm.get('email')
        }
 }
 

