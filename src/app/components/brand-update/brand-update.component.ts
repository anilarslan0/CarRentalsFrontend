import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm: FormGroup;
  brand:Brand;
  brands: Brand[] = [];
  brandId:number;
  constructor(private formBuilder: FormBuilder, private brandService: BrandService,private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.brandId = parseInt(params['id']);
        this.getBrandById(params['id']);
      }
    });
    this.createBrandUpdateForm();
  }
 
  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [this.brandId],
      brandName: ['', Validators.required]
    });
  }

  getBrandById(id: number) {
    this.brandService.getBrandById(id).subscribe(response => {
      this.brand = response.data;
      console.log(this.brand)
    });
  }

 
  updateBrand() {
    if (this.brandUpdateForm.valid)
   {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.updateBrand(brandModel).subscribe(response => {
        this.toastrService.success(response.message, 'Güncelleme Başarılı');
       
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, 'Doğrulama hatası');
          }
        }
      });
    } else {
      this.toastrService.error('Form Bilgilerini Gözden Geçiriniz', 'Hata');
    }
  }


}
