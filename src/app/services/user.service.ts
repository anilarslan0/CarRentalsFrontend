import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44323/api/"
  constructor(private httpClient:HttpClient) { }
}
