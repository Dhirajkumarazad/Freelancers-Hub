import { Injectable } from '@angular/core';
import { lancer } from './admin.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
// import {customer} from './models/customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private LanInService:lancer[]=[];
  private LanUpdated=new Subject<lancer[]>();
  constructor(private http:HttpClient) { }

  getPosts() {
    
    this.http
       .get<{  lancer: lancer[] }>(
        "http://localhost:1025/posts/get"
        

      )
      .subscribe(postData => {
        this.LanInService = postData.lancer;
        this.LanUpdated.next([...this.LanInService]);
        
      });
  }


  // getPostsToCustomer() {
  //   this.http
  //      .get<{  lancer: lancer[] }>(
  //       "http://localhost:3000/posts/customer"
  //     )
  //     .subscribe(postData => {
  //       this.LanInService = postData.lancer;
  //       this.LanUpdated.next([...this.LanInService]);
  //     });
  // }

  addPost(name: String,
    services:  String,
    location:  String, 
    description:  String, 
    service_category: String) 
    {
    const lan: lancer = {  name: name,
      services:  services,
      location:  location, 
      description:  description, 
      service_category: service_category };
    this.http
      .post("http://localhost:1025/posts/createPost", lan)
      .subscribe((responseData) => {
         console.log(responseData);
        this.LanInService.push(lan);
        this.LanUpdated.next([...this.LanInService]);
      });
      console.log("Inside add-post");
  }
  getPostUpdateListener() {
    return this.LanUpdated.asObservable();
  }
//  addPostToCustomer(location: string,service_category: string){
//   const cus: customer  = {  
  
//     location:  location, 
//     service_category: service_category
     
//      };
//     //  this.getPostsToCustomer();
//  }

}

