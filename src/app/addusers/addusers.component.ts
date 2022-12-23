import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent  {

  user:User;

  constructor(private userserv:UserService){
    this.user=new User();
  }
  insertusers(){
    console.log("user in ts",this.user);
    this.userserv.saveuser(this.user).subscribe(result=>{
      console.log(result);
    });

 

  
  }

}
