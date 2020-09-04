import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {
  } 


  Signup(Signupform:NgForm){
    console.log(Signupform.value);
    this.loginService.userSignUp(Signupform.value);

    }
    userSignIn(loginform:NgForm){
      this.loginService.Signin(loginform.value);
      
    }

}


