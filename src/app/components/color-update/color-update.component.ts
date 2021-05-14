import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from 'src/app/services/color.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup,
  FormBuilder,
  FormControl,
  Validators} from '@angular/forms';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm: FormGroup;
  color:Color;
  colors: Color[] = [];
  colorId:number;

  constructor(private formBuilder: FormBuilder, private colorService: ColorService,private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.colorId = parseInt(params['id']);
        console.log(this.colorId)
        this.getColorById(params['id']);
      }
    });
    this.createBrandUpdateForm();

  }

  createBrandUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      colorId: [this.colorId],
      colorName: ['', Validators.required]
    });
  }

  getColorById(id: number) {
    this.colorService.getColorById(id).subscribe(response => {
      this.color = response.data;
      console.log(this.color)
    });
  }


  updateColor() {
   
    if (this.colorUpdateForm.valid)
   {
      let brandModel = Object.assign({}, this.colorUpdateForm.value);
      this.colorService.updateColor(brandModel).subscribe(response => {
        this.toastrService.success(response.message, 'Güncelleme Başarılı');
       
      }, responseError => {
        // if (responseError.error.Errors.length > 0) {
        //   for (let i = 0; i < responseError.error.Errors.length; i++) {
        //     this.toastrService.error(responseError.error.Errors[i].ErrorMessage, 'Doğrulama hatası');
        //   }
        // }
      });
    } else {
      this.toastrService.error('Form Bilgilerini Gözden Geçiriniz', 'Hata');
    }
  }

}
