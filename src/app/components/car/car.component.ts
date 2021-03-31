import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarImage } from 'src/app/models/carImage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carDetails:CarDetail[]=[];
  carImages: CarImage[]=[];
  currentCarState:any;
  filterText="";
  constructor(private carDetailService:CarDetailService, private carImageService: CarImageService,
    private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByBColor(params["colorId"])
      }
      else{
        this.getCarDetails()
      }

    })
   
  }


  getCarDetails(){
    this.carDetailService.getCarDetail().subscribe((response)=>{
      this.carDetails=response.data
      this.getCarImages();
    });
  }

  getCarsByBrand(brandId:number){
    this.carDetailService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data
    })
 }

 getCarsByBColor(colorId:number){
  this.carDetailService.getCarsByColor(colorId).subscribe(response=>{
    this.carDetails=response.data
 
  })
}
getCarImages(){
  this.carImageService.getCarImages().subscribe((response) => {
    this.carImages = response.data;
  });
  
}

setCurrentCar(car:CarDetail){
  this.currentCarState=car;
  console.log(car);
}

}
