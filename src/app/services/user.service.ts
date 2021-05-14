import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemResponseModel } from '../models/ıtemResponseModel';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44323/api/"
  constructor(private httpClient:HttpClient) { }

  getUserInfo(userId:number):Observable<ItemResponseModel<User>>{
    return this.httpClient.get<ItemResponseModel<User>>(this.apiUrl +"users/getbyid?Id="+userId);
  }
  

}
