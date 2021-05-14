import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  userInfo:User; 
  user:any=localStorage.getItem("userId")
   constructor(private userService:UserService,private localStorageService:LocalStorageService,
    private  toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    if(!this.user){

    }else{
      this.getUserInfo()
    }
  }

 getUserInfo(){
    this.userService.getUserInfo(parseInt(this.user)).subscribe(response=>{
      this.userInfo=response.data
    })

  
  }

}
