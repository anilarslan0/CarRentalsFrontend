import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands: Brand[] = [];
  
  constructor(private brandService: BrandService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
  }
 
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  brandDelete(brand:Brand){
    this.brandService.brandDelete(brand).subscribe(response=>{
      this.toastrService.info(response.message)
      window.location.reload();
    },responseError=>{
      this.toastrService.info(responseError.message)
    })
  }
  
}


