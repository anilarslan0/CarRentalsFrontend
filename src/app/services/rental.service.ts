import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44323/api/"
  constructor(private Httpclient:HttpClient) { }

  getRental():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"rentals/GetRentalDetails"
    return this.Httpclient.get<ListResponseModel<Rental>>(newPath)
  }
}
