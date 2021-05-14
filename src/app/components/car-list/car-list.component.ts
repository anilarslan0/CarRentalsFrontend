import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { Car } from 'src/app/models/car';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carDetails: CarDetail[] = [];
  cars:Car[]=[];
  filterText: string = '';
  constructor(private carDetailService: CarDetailService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    this.carDetailService.getCarDetail().subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  deleteCar(car:Car){
    this.carDetailService.deleteCar(car).subscribe(response=>{
      this.toastrService.info(response.message)
      window.location.reload();
    },responseError=>{
      this.toastrService.info(responseError.message)
    })
  }



}
