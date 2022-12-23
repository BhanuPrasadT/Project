import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


 private Listusersurl:string;
 private posturl:string;
    constructor(private http:HttpClient) {
    this.Listusersurl='http://localhost:9092/getuserdetails';
    this.posturl='http://localhost:9092/postuserdata';
   }

    findAll():Observable<User[]>{
   return this.http.get<User[]>(this.Listusersurl);

   }
   saveuser(user:User){
    console.log(user.userId+"-"+user.Firstname+"-"+user.Lastname+"-"+user.emailId);
    return this.http.post<User>(this.posturl,user)
   }
}
