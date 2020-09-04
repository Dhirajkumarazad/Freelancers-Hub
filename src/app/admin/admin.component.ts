import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {lancer} from './admin.model';
import {ServiceService} from './admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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

addService(add: NgForm){
  
  this.service.addPost(add.value.name,add.value.services,add.value.location,add.value.text,add.value.select);
  console.log("Inside addService fun");
  console.log(add.value.name,add.value.services,add.value.location,add.value.text,add.value.select);
  add.resetForm();
}


}
