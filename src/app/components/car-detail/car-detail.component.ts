import { Component, OnInit } from '@angular/core';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarDetail } from 'src/app/models/carDetail';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail[];
  carDetail:CarDetail;
  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarSingleDetail(params["carId"]);
      }   
    })
  }

  getCarDetails(){
    this.carDetailService.getCarDetail().subscribe((response)=>{
      this.carDetails=response.data
    })
  }

  getCarSingleDetail(carId:number) {
    this.carDetailService.getCarSingleDetail(carId).subscribe((response) => {
      this.carDetail = response.data;
      this.toastrService.success("Detay Sayfasına Yönlendirildiniz");
    })
  }
}
