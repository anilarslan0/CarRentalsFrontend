import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { ItemResponseModel } from '../models/ıtemResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44323/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetail():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/GetCarDetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarSingleDetail(carId:number):Observable<ItemResponseModel<CarDetail>>{
    let newPath = this.apiUrl + 'cars/getdetailbyid?carId='+carId
    return this.httpClient.get<ItemResponseModel<CarDetail>>(newPath)
  }

  add(car:Car):Observable<ResponseModel>{  
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }
  
  deleteCar(car:Car):Observable<ItemResponseModel<Car>>{
    return this.httpClient.post<ItemResponseModel<Car>>(this.apiUrl+"cars/delete",car)
  }

  
  
}
