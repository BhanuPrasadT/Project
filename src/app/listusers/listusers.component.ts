import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
users: User[]=[];

  constructor(private userserv:UserService) { }

  ngOnInit() {
    
    this.userserv.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
