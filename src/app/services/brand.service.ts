import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/ıtemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44323/api/"

  constructor(private httpClient:HttpClient) { }


  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath)
  }

  getBrandById(brandId: number): Observable<ItemResponseModel<Brand>>{
    return this.httpClient.get<ItemResponseModel<Brand>>(this.apiUrl + "brands/getbyid?id=" + brandId);
  }

  add(brand:Brand):Observable<ResponseModel>{  
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand)
  }

  updateBrand(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "brands/update", brand);
  }

  brandDelete(brand:Brand):Observable<ItemResponseModel<Brand>>{
    return this.httpClient.post<ItemResponseModel<Brand>>(this.apiUrl+"brands/delete",brand);
  }


}


