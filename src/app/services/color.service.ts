import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/ıtemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44323/api/"

  constructor(private httpClient:HttpClient) { }


  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }

  getColorById(colorId: number): Observable<ItemResponseModel<Color>>{
    return this.httpClient.get<ItemResponseModel<Color>>(this.apiUrl + "colors/getbyid?id=" + colorId);
  }

  add(color:Color):Observable<ResponseModel>{  
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color)
  }

  colorDelete(color:Color):Observable<ItemResponseModel<Color>>{
    return this.httpClient.post<ItemResponseModel<Color>>(this.apiUrl+"colors/delete",color);
  }

  updateColor(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "colors/update", color);
  }


}
