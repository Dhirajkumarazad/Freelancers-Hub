import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(user:any){
    

    this.http.post('http://localhost:1025/auth/signup',user).subscribe((responseData) => {
      console.log("Result :: " , responseData);
      if(responseData["status"] == "success"){
          if(responseData["data"]["userType"] == "Manager"){
             this.router.navigate(['/admin'])

          }else if (responseData["data"]["userType"] == "Customer"){
            const username =responseData["data"]["Email"];
            this.router.navigate(['/user'])
          }
      }
    });
  }

  Signin(user:any){
    console.log("hi SHryeas");
    
    this.http.post('http://localhost:1025/auth/login',user).subscribe((responseData) => {
      
    console.log("Result :: " , responseData);
      if(responseData["status"] == "success"){
          if(responseData["data"]["userType"] == "Manager"){
             this.router.navigate(['/admin']);

          }else if (responseData["data"]["userType"] == "Customer"){
            const username =responseData["data"]["Email"];
            this.router.navigate(['/user',username]);
          }
      }
    });
  }



}
