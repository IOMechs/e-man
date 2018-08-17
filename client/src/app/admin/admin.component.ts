import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user/user.service';

@Component({
  selector: 'em-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) { }
  user:any;
  
  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.user = this.userService.getUser();
  }

}
