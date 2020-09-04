import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {lancer} from '../admin/admin.model';
import {Subscription} from 'rxjs';
import {ServiceService} from '../admin/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lan:lancer[]=[];
    public LansSub: Subscription;
  constructor(public service: ServiceService) { }

  ngOnInit() {
    
    this.service.getPosts();
    this.LansSub = this.service.getPostUpdateListener()
      .subscribe((posts: lancer[]) => {
        this.lan = posts;
        
      });
      
  }
  search(add: NgForm){
    
     
      // this.service.addPost(add.value.name,add.value.services,add.value.location,add.value.desc);
      console.log("Inside addService fun");
      // console.log(add.value.name,add.value.services,add.value.location,add.value.text,add.value.select)
  }
}
